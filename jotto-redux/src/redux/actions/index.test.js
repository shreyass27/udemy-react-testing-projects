import {correctGuess, actionTypes} from './';

describe('correctGuess', () => {
    test('returns an action with correct type', () => {
        const action = correctGuess();
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS})
    })
});
