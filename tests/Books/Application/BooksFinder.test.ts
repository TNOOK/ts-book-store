import {BookRepository} from "../../../src/Books/Domain/BookRepository";
import {BooksFinder} from "../../../src/Books/Application/BooksFinder";
import {BookId} from "../../../src/Books/Domain/BookId";
import {Book} from "../../../src/Books/Domain/Book";
import {BookName} from "../../../src/Books/Domain/BookName";
import {BookLength} from "../../../src/Books/Domain/BookLength";
import {BookRespositoryMock} from "../__mocks__/repository/BookRespositoryMock";

describe('Books Finder', () => {
    it('should return book array', async () => {
        const repository: BookRespositoryMock = new BookRespositoryMock();
        const findBooks = new BooksFinder(repository);
        await findBooks.run();
        repository.assertLastFindAllExecutionTimes(1);
    });
});
