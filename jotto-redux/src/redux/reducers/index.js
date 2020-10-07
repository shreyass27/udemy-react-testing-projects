import { combineReducers } from 'redux';
import success from './success';
import guessedWords from './guessWords';
import secretWord from './secretWord';

export default combineReducers({
    success,
    guessedWords,
    secretWord
});