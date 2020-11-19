import React from 'react';
import {mount} from 'enzyme';
import Home from "../Home";
import toJson from 'enzyme-to-json';
import PriceList from '../../components/PriceList'
import ViewTab from '../../components/ViewTab'
import MonthPicker from '../../components/MonthPicker'
import {items} from '../Home'
import {LIST_VIEW,CHART_VIEW} from '../../utility'
import TotalPrice from "../../components/TotalPrice";
import CreateBtn from "../../components/CreateBtn";
import {UnorderedListOutlined, PieChartOutlined} from '@ant-design/icons';


const filterMonth11Items = (items) => items.filter(item => item.date.includes(`2020-11`))

describe('test Home component', () => {

    // 仅过滤出2020年11月份的
    let filteredItems = filterMonth11Items(items)

    let wrapper
    // 每一项都刷新一个wrapper
    beforeEach(() => {
        // 解决： TypeError: window.matchMedia is not a function
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // deprecated
                removeListener: jest.fn(), // deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
        wrapper = mount(<Home/>)
    })


    it('should layout correct rendered', () => {
        // 渲染出来PriceList组件有1个
        expect(wrapper.find(PriceList).length).toBe(1)
        expect(wrapper.find(CreateBtn).length).toBe(1)
        expect(wrapper.find(ViewTab).length).toBe(1)
        expect(wrapper.find(TotalPrice).length).toBe(1)
        expect(wrapper.find(MonthPicker).length).toBe(1)

        // ViewTab active 状态是 LIST_VIEW
        expect(wrapper.find(ViewTab).props().activeTab).toEqual(LIST_VIEW)
        // MonthPicker 传入的年月
        expect(wrapper.find(MonthPicker).props().year).toEqual(2020)
        expect(wrapper.find(MonthPicker).props().month).toEqual(11)
        // 传入的参数长度应该等于10月份的长度
        expect(wrapper.find(PriceList).props().items.length).toEqual(filteredItems.length)

    })
    it('should snapshot rendered', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('click another view tab to change view', () => {
        wrapper.find(PieChartOutlined).simulate('click')
        expect(wrapper.state('tabView')).toEqual(CHART_VIEW)
        wrapper.find(UnorderedListOutlined).simulate('click')
        expect(wrapper.state('tabView')).toEqual(LIST_VIEW)
    })
    it('click new month item,should change to correct list', () => {
        // 模拟点击，展开年月
        wrapper.find('.month-selector').simulate('click')
        // 点击10月按钮
        wrapper.find('.month-button').at(18).simulate('click')
        // 更新后的state 应该是10月
        expect(wrapper.state("currentDate").month).toBe(10)
        expect(wrapper.find(PriceList).prop('items').length).toBe(1)
        expect(wrapper.find(MonthPicker).props().month).toEqual(10)
    })
    it('click create button,create a new item', () => {
        wrapper.find('.creat-item-button').last().simulate('click')
        // 这里原始的items长度是3，在11月份实际过滤显示为2个,
        let filtered = filterMonth11Items(wrapper.state('items'))
        expect(filtered.length).toBe(filteredItems.length + 1)
    })

})