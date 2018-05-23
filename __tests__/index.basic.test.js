import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from '../src/index';

configure({adapter: new Adapter()});

describe('basic tests', () => {

    it('loader is active', () => {
        const wrapper = shallow(<Loader active={true}/>);
        expect(wrapper.hasClass('7c-react-loader-active')).toBeTruthy();
    });

    it('loader is disabled', () => {
        const wrapper = shallow(<Loader active={false}/>);
        expect(wrapper.hasClass('7c-react-loader-disabled')).toBeTruthy();
    });

    it('own class name for active', () => {
        const ownClassName = 'active';

        const wrapper = shallow(<Loader active={true} activeClassName={ownClassName}/>);
        expect(wrapper.hasClass(ownClassName)).toBeTruthy();
    });

    it('own class name for disabled', () => {
        const ownClassName = 'disabled';

        const wrapper = shallow(<Loader active={false} disabledClassName={ownClassName}/>);
        expect(wrapper.hasClass(ownClassName)).toBeTruthy();
    });

    it('set "span" as element', () => {
        const wrapper = shallow(<Loader active={false} tag='span'/>);
        expect(wrapper.find('span').exists()).toBeTruthy();
    });
});
