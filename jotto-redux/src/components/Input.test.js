import React from 'react';
import { shallow } from 'enzyme';


import { findByTestAttr, checkProps, storeFactory } from '../../test-utlis/test.utlis';
import Input from './Input';

const setup = (initialState = {}) => {

    return shallow(<Input store={storeFactory(initialState)} />).dive().dive();

}

setup()

describe('render Input', () => {
    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup({ success: false });
        })

        test('should render without error', () => {
            const inputBox = findByTestAttr(wrapper, 'component-input');
            expect(inputBox.length).toBe(1);
        });

        test('should render input', () => {
            const input = findByTestAttr(wrapper, 'input-box');
            expect(input.length).toBe(1);
        })

        test('should render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1);
        })
    })

    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = setup({ success: true });
        });

        test('should render without error', () => {
            const inputBox = findByTestAttr(wrapper, 'component-input');
            expect(inputBox.length).toBe(1);
        });

        test('does not render input', () => {
            const inputEle = findByTestAttr(wrapper, 'input-box');
            expect(inputEle.length).toBe(0)
        })

        test('does not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0);
        })
    })
});


describe('update state', () => {

})