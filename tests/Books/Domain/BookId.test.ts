import {BookId} from "../../../src/Books/Domain/BookId";

describe('BookLength', () => {
    const mockStringId: string = '4f608969-ec4c-4e66-bf70-3a98fe7d7ca4';
    let bookId: BookId;
    beforeEach(() => {
        bookId = new BookId(mockStringId);
    });
    it('should create a valid BookLength', () => {
        expect(bookId).not.toBe(null);
    });
    it('should has specific length', () => {
        expect(bookId.toString()).toBe(mockStringId);
    })
});