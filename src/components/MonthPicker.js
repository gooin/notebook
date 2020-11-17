import React, {Component} from 'react';
import {Row, Col, Divider, Button} from 'antd';
import {add0WhenLess10, range} from '../utility';
import PropTypes from 'prop-types';

class MonthPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            selectedYear: this.props.year,
            selectedMonth: this.props.month,
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = (event) => {
        // console.log("this", this)
        // console.log("this", this.node)
        // console.log("event", event.target);
        //
        // if (this.node.contains(event.target)) {
        //     console.log("eee");
        //     return;
        // }
        // this.setState({
        //     isOpen: false
        // })
    }

    toggleDropdown = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    onChangeSelectedYear = (event, year) => {
        event.preventDefault();
        this.setState({
            selectedYear: year
        })
    }

    onChangeSelectedMonth = (event, month) => {
        event.preventDefault();
        this.setState({
            selectedMonth: month
        })
        this.toggleDropdown()
        this.props.onChange(this.state.selectedYear, month)
    }


    render() {
        const {year, month} = this.props
        // const year = this.state.selectedYear
        // const month = this.state.selectedMonth
        const {isOpen} = this.state
        const monthRange = range(12, 1);
        const yearRange = range(9, year - 4);
        return (
            <div>
                <div className="dropdown">
                    <h5>选择月份</h5>
                    <button className="btn btn-secondary dropdown-toggle" type="button"
                            onClick={this.toggleDropdown}
                    >
                        {`${year} 年 ${add0WhenLess10(month)} 月`}
                    </button>
                    {
                        isOpen &&
                        <div className="dropdown-menu"
                             style={{display: 'block', minWidth: '10rem', padding: '.5rem .5rem'}}>
                            {
                                monthRange.map((monthNumber, index) => (
                                    <Row key={index}>
                                        <Col span={9}>
                                            <Button
                                                type={this.state.selectedYear === yearRange[index] ? "primary" : 'dashed'}
                                                onClick={(event) => this.onChangeSelectedYear(event, yearRange[index])}
                                            >
                                                {yearRange[index]}
                                            </Button>
                                        </Col>
                                        <Divider type="vertical"/>
                                        <Col span={8}>
                                            <Button
                                                type={this.state.selectedMonth === monthNumber ? "primary" : 'dashed'}
                                                onClick={(event) => this.onChangeSelectedMonth(event, monthNumber)}
                                            >
                                                {add0WhenLess10(monthNumber)} 月
                                            </Button>
                                        </Col>
                                    </Row>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        );
    }
}

MonthPicker.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}


export default MonthPicker;