import { createStore, applyMiddleware } from 'redux';
import checkPropTypes from 'check-prop-types';
import rootStore from '../src/redux/reducers';
import {middlewares} from '../src/redux/configureStore';

export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootStore, initialState);
}


/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 * @returns {ShallowWrapper} - Selector based wrapper
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}