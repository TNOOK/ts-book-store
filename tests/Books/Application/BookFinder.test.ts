import {BookRepository} from "../../../src/Books/Domain/BookRepository";
import {BookFinder} from "../../../src/Books/Application/BookFinder";
import {BookId} from "../../../src/Books/Domain/BookId";
import {Book} from "../../../src/Books/Domain/Book";
import {BookName} from "../../../src/Books/Domain/BookName";
import {BookLength} from "../../../src/Books/Domain/BookLength";
import {BookRespositoryMock} from "../__mocks__/repository/BookRespositoryMock";

describe('Book Finder', () => {
    it('should return a book', async () => {
        const mockId = new BookId('4f608969-ec4c-4e66-bf70-3a98fe7d7ca4');
        const repository: BookRespositoryMock = new BookRespositoryMock();
        const findBook = new BookFinder(repository);
        await findBook.run(mockId);
        repository.assertLastFindExecutionWith(mockId);
    });
});
