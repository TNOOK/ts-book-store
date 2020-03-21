import {BookRepository} from "../../../src/Books/Domain/BookRepository";
import {BookFinder} from "../../../src/Books/Application/BookFinder";
import {BookId} from "../../../src/Books/Domain/BookId";
import {Book} from "../../../src/Books/Domain/Book";
import {BookName} from "../../../src/Books/Domain/BookName";
import {BookLength} from "../../../src/Books/Domain/BookLength";

describe('Book Finder', () => {
    it('should create a valid course', async () => {
        const find = jest.fn();
        const repository: BookRepository = {
            find,
            findAll: jest.fn()
        };

        const findBook = new BookFinder(repository);

        const id = new BookId('4f608969-ec4c-4e66-bf70-3a98fe7d7ca4');
        const name = BookName.fromString('some-name');
        const length = new BookLength(15);

        const book = new Book(id, name, length);

        await findBook.run(id);
        expect(find).toHaveBeenCalledWith(id);
    });
});
