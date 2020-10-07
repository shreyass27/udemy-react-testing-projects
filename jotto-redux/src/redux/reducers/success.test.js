import { correctGuess } from '../actions';
import success, { defaultState } from './success';

test('returns default initial state of `false` when no action is passed', () => {
    const newState = success(defaultState, {});
    expect(newState).toBe(false);
});

test('returns  state of `true` when CORRECT_GUESS action is passed', () => {
    const newState = success(defaultState, correctGuess());
    expect(newState).toBe(true);
});