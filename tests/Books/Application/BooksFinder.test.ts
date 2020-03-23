import {BookRepository} from "../../../src/Books/Domain/BookRepository";
import {BooksFinder} from "../../../src/Books/Application/BooksFinder";
import {BookId} from "../../../src/Books/Domain/BookId";
import {Book} from "../../../src/Books/Domain/Book";
import {BookName} from "../../../src/Books/Domain/BookName";
import {BookLength} from "../../../src/Books/Domain/BookLength";

describe('Books Finder', () => {
    it('should return book array', async () => {
        const jestFind = jest.fn();
        const findAll =  () => {
            jestFind();
            const id = new BookId('4f608969-ec4c-4e66-bf70-3a98fe7d7ca4');
            const name = BookName.fromString('some-name');
            const length = new BookLength(15);
            return [new Book(id, name, length)];
        };
        const repository: BookRepository = {
            find: jest.fn(),
            findAll
        };
        const findBooks = new BooksFinder(repository);
        await findBooks.run();
        expect(jestFind).toHaveBeenCalled();
    });
});
