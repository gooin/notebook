import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount} from 'enzyme';
import MonthPicker from "../MonthPicker";
import toJson from 'enzyme-to-json';

// const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
// const { window } = jsdom;
//
// function copyProps(src, target) {
//     Object.defineProperties(target, {
//         ...Object.getOwnPropertyDescriptors(src),
//         ...Object.getOwnPropertyDescriptors(target),
//     });
// }
//
// global.window = window;
// global.document = window.document;
// global.navigator = {
//     userAgent: 'node.js',
// };
// global.requestAnimationFrame = function (callback) {
//     return setTimeout(callback, 0);
// };
// global.cancelAnimationFrame = function (id) {
//     clearTimeout(id);
// };
// copyProps(window, global);


const props = {
    year: 2020,
    month: 11,
    onChange: jest.fn()
}


describe('test MonthPicker component', () => {


    let wrapper = shallow(<MonthPicker {...props}/>)


    it('should h5 rendered', () => {
        expect(wrapper.find('h5').length).toBe(1)
    })
    it('should button contains year and month', () => {
        expect(wrapper.find('button').text()).toContain('2020 年 11 月')
    })
    it('should default month render to 0', () => {
        expect(wrapper.find('Row').length).toBe(0)
    })
    it('click dropdown button, render year and month', () => {
        // 默认isOpen为false
        expect(wrapper.state('isOpen')).toBeFalsy()
        // 模拟点击，展开年月
        wrapper.find('button').simulate('click')
        // 展开后检查快照
        expect(toJson(wrapper)).toMatchSnapshot()
        // 点击后，isOpen为true
        expect(wrapper.state('isOpen')).toBeTruthy()
        // 检查是否渲染出来了12行
        expect(wrapper.find('Row').length).toBe(12)
        // 点击渲染出的第一个按钮，应该是2016
        wrapper.find('Button').first().simulate('click')
        expect(wrapper.state('selectedYear')).toEqual(2016)
        // 点击渲染出的最后一个按钮，月份应该是12
        wrapper.find('Button').last().simulate('click')
        expect(wrapper.state('selectedMonth')).toEqual(12)
        // 点击月份后会关闭面板,渲染的行数应该为0，面板状态应该为false
        expect(wrapper.find('Row').length).toBe(0)
        expect(wrapper.state('isOpen')).toBeFalsy()
        // 检查回调是否调用
        expect(props.onChange).toHaveBeenCalled()

    })

    it('click dropdown button, click document to close dropdown', () => {
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
                matches: false,
                media: query,
                onchange: null,
                addListener: jest.fn(), // Deprecated
                removeListener: jest.fn(), // Deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            }))
        });


        const wrapper1 = mount(<MonthPicker {...props}/>)
        // // 模拟点击，展开年月
        wrapper1.find('button').simulate('click')
        // 点击后，isOpen为true
        expect(wrapper1.state('isOpen')).toBeTruthy()
        // 检查是否渲染出来了12行
        expect(wrapper1.find('Row').length).toBe(12)

        // let eventMap = {}
        // document.addEventListener = jest.fn((event, cb) => {
        //     eventMap[event] = cb
        // })
        //
        // eventMap.click({
        //     target:ReactDOM.findDOMNode(wrapper1.instance())
        // })
        // // 点击后，isOpen为true
        // expect(wrapper1.state('isOpen')).toBeTruthy()


    })

})