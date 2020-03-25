import {BookRepository} from "../../../src/Books/Domain/BookRepository";
import {BookFinder} from "../../../src/Books/Application/BookFinder";
import {BookId} from "../../../src/Books/Domain/BookId";
import {Book} from "../../../src/Books/Domain/Book";
import {BookName} from "../../../src/Books/Domain/BookName";
import {BookLength} from "../../../src/Books/Domain/BookLength";

describe('Book Finder', () => {
    it('should create a valid course', async () => {
        const mockId = new BookId('4f608969-ec4c-4e66-bf70-3a98fe7d7ca4');
        const jestFind = jest.fn();
        const find =  (bookId: BookId) => {
            jestFind(bookId);
            const id = bookId;
            const name = BookName.fromString('some-name');
            const length = new BookLength(15);
            return new Book(id, name, length);
        };
        const repository: BookRepository = {
            find,
            findAll: jest.fn(),
            save: jest.fn()
        };
        const findBook = new BookFinder(repository);
        await findBook.run(mockId);
        expect(jestFind).toHaveBeenCalledWith(mockId);
    });
});
