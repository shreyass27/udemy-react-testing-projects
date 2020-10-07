
import { actionTypes } from '../actions';
export const defaultState = false;

const success = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CORRECT_GUESS:
            return true;
        default:
            return state;
    }
};

export default success;