import React from 'react';
import {shallow} from 'enzyme';
import PriceList from "../PriceList";


import {items, categries} from "../../containers/Home";
import toJson from 'enzyme-to-json';

const itemsWithCategory = items.map(item => {
    item.category = categries[item.cid]
    return item
})

const props = {
    items: itemsWithCategory,
    onEdit: jest.fn(),
    onDelete: jest.fn() // 模拟测试函数
}
let wrapper
describe('test PriceList component', () => {
    beforeEach(() => {
        wrapper = shallow(<PriceList {...props}/>)
    })

    it('match snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('items has correct length', () => {
        expect(wrapper.find('Row').length).toEqual(itemsWithCategory.length)
        expect(wrapper.find('Button').length).toEqual(itemsWithCategory.length * 2)
    })
    it('render correct icon', () => {
        expect(wrapper.find('Icons').length).toEqual(itemsWithCategory.length)
        expect(wrapper.find('Icons').first().props().iconName).toEqual(itemsWithCategory[0].category.name)
    })

    it('should trigger the correct function callback', () => {
        // 模拟点击
        wrapper.find('Button').first().prop('onClick')()
        wrapper.find('Button').last().simulate('click')
        expect(props.onEdit).toHaveBeenCalledWith(itemsWithCategory[0])
        expect(props.onDelete).toHaveBeenCalled()
    })
})