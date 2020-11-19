import React from 'react';
import {shallow} from 'enzyme';
import Icons from "../Icons";
import toJson from 'enzyme-to-json';


const props = {
    iconName: 'salary'
}


describe('test Icons component', () => {
    let wrapper = shallow(<Icons {...props}/>)
    it('should Tabs rendered', () => {
        expect(wrapper.find('IosCash').length).toBe(1)
    })

    it('check snapshot', () => {
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})