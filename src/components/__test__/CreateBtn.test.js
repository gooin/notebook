import React from 'react';
import {shallow} from 'enzyme';
import CreateBtn from "../CreateBtn";
import toJson from 'enzyme-to-json';


const props = {
    onCreate: jest.fn()
}


describe('test CreateBtn component', () => {
    let wrapper = shallow(<CreateBtn {...props}/>)
    it('should Button rendered', () => {
        expect(wrapper.find('Button').length).toBe(1)
    })

    it('check snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('should button clicked', () => {
        wrapper.find('Button').simulate('click')
        expect(props.onCreate).toHaveBeenCalled()
    })

})