import {BookLength} from "../../../src/Books/Domain/BookLength";

describe('BookLength', () => {
    const mockLength: number = 200;
    let bookLength: BookLength;
    beforeEach(() => {
        bookLength = new BookLength(mockLength);
    });
    it('should create a valid BookLength', () => {
        expect(bookLength).not.toBe(null);
    });
    it('should has specific length', () => {
        expect(bookLength.value).toBe(mockLength);
    })
});