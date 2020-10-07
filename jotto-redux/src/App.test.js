import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

 /**
  * Factory function to create a ShallowWrapper for the App component.
  * @function setup
  * @param {object} props - Component props specific to this setup.
  * @returns {ShallowWrapper}
  */
 const setup = (props={}) => {
  return shallow(<App { ...props }/>)
}


test('should render without error', () => {
    
});