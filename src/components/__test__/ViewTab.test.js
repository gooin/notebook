import React from 'react';
import {shallow} from 'enzyme';
import ViewTab from "../ViewTab";
import toJson from 'enzyme-to-json';


const props = {
    onTabViewChange: jest.fn()
}


describe('test ViewTab component',()=>{
    let wrapper = shallow(<ViewTab {...props}/>)
    it('should Tabs rendered',()=>{
        expect(wrapper.find('TabPane').length).toBe(2)
    })

    it('check snapshot',()=>{
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})