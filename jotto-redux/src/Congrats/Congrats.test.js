import React from 'react';
import { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../../test-utlis/test.utlis';


const defaultProps = { success: false }
/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {object} props - Component Props to be passed while rendering
 * @returns {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * 
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />)
}

test('should render without error', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});


test('should render text when success prop is false', () => {
    const wrapper = setup({ success: false });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('should render congrats text when success prop is true', () => {
    const wrapper = setup({ success: true });
    const msgComponent = findByTestAttr(wrapper, 'congrats-message');
    expect(msgComponent.text().length).not.toBe(0);
});

test('should not throw warning with expected props', () => {
    const expectedProps = { success: true };
    checkProps(Congrats, expectedProps);
})