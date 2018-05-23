import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loader from '../src/index';

configure({adapter: new Adapter()});
jest.useFakeTimers();

describe('delay tests', () => {

    it('activate immediately element after 0 ms delay', () => {
        const wrapper = shallow(<Loader active={true} delay={0}/>);

        expect(wrapper.hasClass('7c-react-loader-active')).toBeTruthy();
    });

    it('don\'t activate before time is up', () => {
        const wrapper = shallow(<Loader active={true} delay={500}/>);

        jest.advanceTimersByTime(499);
        wrapper.update();
        expect(wrapper.hasClass('7c-react-loader-disabled')).toBeTruthy();
    });

    it('don\'t activate when time is up but element active prop is set as false', () => {
        const wrapper = shallow(<Loader active={false} delay={10}/>);

        jest.runAllTimers();
        wrapper.update();
        expect(wrapper.hasClass('7c-react-loader-disabled')).toBeTruthy();
    });

    it('don\' render if active prop will set to false before delay time is up', () => {
        const wrapper = shallow(<Loader active={true} delay={500}/>);
        expect(wrapper.hasClass('7c-react-loader-disabled')).toBeTruthy();

        jest.advanceTimersByTime(400);
        wrapper.setProps({ active: false });

        jest.advanceTimersByTime(100);
        expect(wrapper.hasClass('7c-react-loader-disabled')).toBeTruthy();
    });

    it('activate element after X ms delay', () => {
        const wrapper = shallow(<Loader active={true} delay={500}/>);
        expect(wrapper.hasClass('7c-react-loader-disabled')).toBeTruthy();

        jest.runAllTimers();
        wrapper.update();
        expect(wrapper.hasClass('7c-react-loader-active')).toBeTruthy();
    });

    it('again activate with delay', () => {
        const wrapper = shallow(<Loader active={true} delay={10}/>);

        jest.advanceTimersByTime(10);
        wrapper.update();
        expect(wrapper.hasClass('7c-react-loader-active')).toBeTruthy();

        wrapper.setProps({ active: false });
        expect(wrapper.hasClass('7c-react-loader-disabled')).toBeTruthy();

        wrapper.setProps({ active: true, delay: 25});

        jest.advanceTimersByTime(10);
        wrapper.update();
        expect(wrapper.hasClass('7c-react-loader-disabled')).toBeTruthy();

        jest.advanceTimersByTime(15);
        wrapper.update();
        expect(wrapper.hasClass('7c-react-loader-active')).toBeTruthy();
    });
});