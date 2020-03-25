import {BookRepository} from "../../../src/Books/Domain/BookRepository";
import {BookRespositoryMock} from "../__mocks__/repository/BookRespositoryMock";
import {BookCreator} from "../../../src/Books/Application/BookCreator";
import {BookId} from "../../../src/Books/Domain/BookId";
import {Book} from "../../../src/Books/Domain/Book";
import {BookName} from "../../../src/Books/Domain/BookName";
import {BookLength} from "../../../src/Books/Domain/BookLength";

describe('Book Creator', () => {
    it('should create a valid book', async () => {
        const mockId = new BookId('4f608969-ec4c-4e66-bf70-3a98fe7d7ca4');
        const mockName = BookName.fromString('some-name');
        const mockLength = new BookLength(15);
        const mockBook = new Book(mockId, mockName, mockLength);
        const repository: BookRespositoryMock = new BookRespositoryMock();
        const createBook = new BookCreator(repository);
        await createBook.run(mockId, mockName, mockLength);
        repository.assertLastSaveExecutionWith(mockBook);
    });
});
