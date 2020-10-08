import axios from 'axios';
import { getLetterMatchCount } from '../../helper';
export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD',
    SET_SECRET_WORD: 'SET_SECRET_WORD',
};


export const correctGuess = () => ({
    type: 'CORRECT_GUESS'
});

export const guessWord = (guessedWord) => {
    return function (dispatch, getState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
        dispatch({
            type: actionTypes.GUESS_WORD,
            payload: { guessedWord, letterMatchCount }
        });

        if (guessedWord.toLowerCase() === secretWord.toLowerCase()) {
            dispatch({ type: actionTypes.CORRECT_GUESS });
        }
    };
}

/**
 * Returns Redux Thunk function that initiates an axios request 
 *    and dispatches the response as a 'SET_SECRET_WORD' action
 * @returns {function} - Redux Thunk function. 
 */
export const getSecretWord = () => {
    return (dispatch) => {
      return axios.get('http://localhost:3030')
        .then(response => {
          dispatch({
            type: actionTypes.SET_SECRET_WORD,
            payload: response.data
          });
        });
    }
  }