import {BookName} from "../../../src/Books/Domain/BookName";

describe('BookName', () => {
    const mockName: string = 'Dictionary';
    let bookName: BookName;
    beforeEach(() => {
        bookName = BookName.fromString(mockName);
    });
    it('should create a valid BookName', () => {
        expect(bookName).not.toBe(null);
    });
    it('should has specific name', () => {
        expect(bookName.value).toBe(mockName);
    })
});