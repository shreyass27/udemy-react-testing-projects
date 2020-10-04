import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Function to create ShallowWrapper for the App component.
 * @function setup
 */
const setup = () => shallow(<App />);

/**
 * Function to find element/node bt Test attribute name.
 * @function findByTestAttr
 */
const findByTestAttr = (wrapper, name) => wrapper.find(`[data-test='${name}']`);

test('App component renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
})

test('App renders a button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
})

test('renders a decrement counter button', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  expect(decrementButton.length).toBe(1)
})

test('App renders a counter display', () => {
  const wrapper = setup();
  const counter = findByTestAttr(wrapper, 'counter-display');
  expect(counter.length).toBe(1);
})

test('App counter starts at 0', () => {
  const wrapper = setup();
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('0');
})

test('Clicking on button increments counter display', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  incrementButton.simulate('click');
  
  const count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('1');
});

test('Clicking on decrement button should decrement count', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  incrementButton.simulate('click');
  incrementButton.simulate('click');
  
  let count = findByTestAttr(wrapper, 'count').text();
  expect(count).toBe('2');

  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  
  decrementButton.simulate('click');
  count = findByTestAttr(wrapper, 'count').text()

  expect(count).toBe('1');
});

test('clicking decrement button at 0 counter should display error', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');

  decrementButton.simulate('click');

  const counterError = findByTestAttr(wrapper, 'counter-error');

  expect(counterError.length).toBe(1);
});



test('clicking increment button in error state should remove error', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');

  decrementButton.simulate('click');

  let counterError = findByTestAttr(wrapper, 'counter-error');

  expect(counterError.length).toBe(1);

  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  incrementButton.simulate('click');

  counterError = findByTestAttr(wrapper, 'counter-error');
  expect(counterError.length).toBe(0)
});