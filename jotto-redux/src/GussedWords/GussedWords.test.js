import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test-utlis/test.utlis';
import GuessedWords from './GussedWords';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};
/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {object} props - Component Props to be passed while rendering
 * @returns {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * 
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setupProps} />)
}


test('Does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});


describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-gussed-words');
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess words', () => {
        const instructions = findByTestAttr(wrapper, 'gussed-instructions');
        expect(instructions.text().length).not.toBe(0);
    })
});

describe('if there are words guessed', () => {
    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ];

    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-gussed-words');
        expect(component.length).toBe(1);
    });

    test('renders guessed words section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'gussed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    test('renders correct number of guessed words', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'gussed-word');
        expect(guessedWordNodes.length).toBe(guessedWords.length);
    });
});