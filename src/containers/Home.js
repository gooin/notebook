import React, {Component} from 'react';
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import MonthPicker from '../components/MonthPicker'
import {Row, Col, Divider, Button} from 'antd';

import {LIST_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, CHART_VIEW} from '../utility'
import logo from "../logo.svg";
import TotalPrice from "../components/TotalPrice";
import CreateBtn from "../components/CreateBtn";


const items = [
    {
        "id": 1,
        "title": "吃饭",
        "price": 200,
        "date": "2020-11-12",
        "cid": 2
    },
    {
        "id": 2,
        "title": "假如发财了",
        "price": 200,
        "date": "2020-11-12",
        "cid": 3
    },
    {
        "id": 2,
        "title": "去去医院体检",
        "price": 200,
        "date": "2020-10-12",
        "cid": 1
    },{
        "id": 3,
        "title": "去去医院体检",
        "price": 200,
        "date": "2020-9-12",
        "cid": 1
    }
]

const categries = {
    "1": {
        "id": 1,
        "name": "travel",
        "type": "outcome"
    },
    "2": {
        "id": 2,
        "name": "food",
        "type": "outcome"
    },
    "3": {
        "id": 3,
        "name": "salary",
        "type": "income"
    }
}


const newItem = {
    "id": 5,
    "title": "工资",
    "price": 2000,
    "date": "2020-11-12",
    "cid": 3
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView: LIST_VIEW
        }
    }

    changeView = (type) => {
        console.log("changeView ", type);

        this.setState({
            tabView: type
        })
    }
    changeDate = (year, month) => {
        this.setState({
            currentDate: {
                year, month
            }
        })
    }
    editItem = (editedItem) => {
        // editedItem.title += "_updated! "
        const filtered = this.state.items.map(item => {
            if (editedItem.id === item.id) {
                return {...item, title: item.title + "_updated "}
            } else {
                return item
            }
        })
        this.setState({
            items: filtered
        })
    }
    deleteItem = (deletedItem) => {
        const filtered = this.state.items.filter(item => item.id !== deletedItem.id)
        this.setState({
            items: filtered
        })
    }
    createItem = () => {
        this.setState({
            items: [newItem, ...this.state.items]
        })
    }


    render() {
        const {items, currentDate, tabView} = this.state
        const itemsWithCategory = items.map(item => {
            item.category = categries[item.cid]
            return item
        }).filter(item => {
            // 过滤，仅显示当前年月的记录
            return item.date.includes(`${currentDate.year}-${currentDate.month}`)
        })

        let currIncome = 0;
        let currOutcome = 0;
        itemsWithCategory.forEach(item => {
            item.category.type === TYPE_INCOME ?
                currIncome += item.price :
                currOutcome += item.price
        })

        return (
            <>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Row>
                        <Col span={12}>
                            <MonthPicker
                                year={currentDate.year}
                                month={currentDate.month}
                                onChange={this.changeDate}
                            />
                        </Col>
                        <Col span={12}>
                            <TotalPrice
                                income={currIncome}
                                outcome={currOutcome}
                            />
                        </Col>
                    </Row>
                </header>


                <ViewTab
                    activeTab={tabView}
                    onTabViewChange={this.changeView}
                />

                <CreateBtn
                    onCreate={this.createItem}
                />

                {
                    tabView === LIST_VIEW &&
                    <PriceList
                        items={itemsWithCategory}
                        onEdit={this.editItem}
                        onDelete={this.deleteItem}
                    />
                }
                {
                    tabView === CHART_VIEW &&
                    <h1> Chart here</h1>
                }


            </>
        );
    }
}

export default Home;