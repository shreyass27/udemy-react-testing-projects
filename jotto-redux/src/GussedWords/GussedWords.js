import React from 'react';
import PropTypes from 'prop-types';

const GuessedWords = ({ guessedWords }) => {
    return (<div data-test='component-gussed-words'>
        {
            guessedWords.length === 0 ?
                <span data-test='gussed-instructions'>
                    Try to guess the secret word!
            </span> :
                <div data-test='gussed-words'>
                    <h3>Gussed Words</h3>
                    <table className="table table-sm">
                        <thead className="thead-light">
                            <tr>
                                <th>Word</th>
                                <th>Matching Letters</th>
                            </tr>
                        </thead>

                        <tbody>
                            {guessedWords.map((word, index) =>
                                <tr data-test='gussed-word' key={word + index}>
                                    <td>{word.guessedWord}</td>
                                    <td>{word.letterMatchCount}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
        }
    </div>)
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
};


export default GuessedWords;