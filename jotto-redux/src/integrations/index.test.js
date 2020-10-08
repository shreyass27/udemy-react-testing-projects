import { storeFactory } from '../../test-utlis/test.utlis';
import { guessWord, getSecretWord } from '../redux/actions'
import moxios from 'moxios';

describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('no guessed word', () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        })

        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });

        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(secretWord));
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{ guessedWord: secretWord, letterMatchCount: secretWord.length }]
            };
            const newState = store.getState();
            expect(newState).toEqual(expectedState);
        });
    });


    describe('some guess guessed word', () => {
        const guessedWords = [
            { guessedWord: 'agile', letterMatchCount: 1 },
            { guessedWord: 'fragile', letterMatchCount: 2 },
        ];
        const initialState = { guessedWords, secretWord };

        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        });

        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [...guessedWords, { guessedWord: 'train', letterMatchCount: 3 }]
            };

            expect(newState).toEqual(expectedState);
        });

        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();

            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }]
            };

            expect(newState).toEqual(expectedState);
        });
    });
});



describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install();
    })
    afterEach(() => {
        moxios.uninstall();
    })

    test('adds response word to state', () => {
        const secretWord = 'party';
        const store = storeFactory({ secretWord: '' });

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();

            request.respondWith({
                status: 200,
                response: secretWord
            });
        });

        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState().secretWord;
                expect(newState).toEqual(secretWord);
            })
    })

});