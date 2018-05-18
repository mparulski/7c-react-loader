import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from '../src/index';

configure({adapter: new Adapter()});

describe('basic tests', () => {

    it('loader is active', () => {
        const wrapper = shallow(<Loader active={true}/>);
        console.log(wrapper);
        expect(wrapper.hasClass('7c-react-loader-active')).toBeTruthy();
    });

    it('loader is disabled', () => {
        const wrapper = shallow(<Loader active={false}/>);
        expect(wrapper.hasClass('7c-react-loader-disabled')).toBeTruthy();
    });
});
