import { getLetterMatchCount } from './';

describe('getLetterMatchCount', () => {
    const secretword = 'party';

    test('returns correct count when there are no matching letters', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretword);
        expect(letterMatchCount).toBe(0);
    });

    test('returns correct count when there are matching 3 letters', () => {
        const letterMatchCount = getLetterMatchCount('train', secretword);
        expect(letterMatchCount).toBe(3);
    });

    test('returns correct count when there are duplicate matching letters', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretword);
        expect(letterMatchCount).toBe(3);
    });
})