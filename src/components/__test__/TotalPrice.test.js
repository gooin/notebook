import React from 'react';
import {shallow} from 'enzyme';
import TotalPrice from "../TotalPrice";

const props = {
    income: 1000,
    outcome: 2000
}

describe('test TotalPrice component',()=>{
    const wrapper = shallow(<TotalPrice {...props} />)
    it('should render text correct',()=>{
        expect(wrapper.first('h4').text()).toContain(1000)
        expect(wrapper.first('h4').text()).toContain(2000)
        expect(wrapper.first('h4').text()).toContain("元")
    })
    it('check snapshot',()=>{
        expect(wrapper.debug()).toMatchSnapshot()
    })

})