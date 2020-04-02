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
    });
    it('should equalize', () => {
        let id = new BookId('ec33dcf5-a31b-4f19-8f7f-7bf57f002a3c');
        let id2 = new BookId('4f608969-ec4c-4e66-bf70-3a98fe7d7ca4');
        expect(bookId.equals(id)).toBeFalsy();
        expect(bookId.equals(id2)).toBeTruthy();
    });
});