
import {BookId} from "../../../src/Books/Domain/BookId";
import {BookRespositoryMock} from "../__mocks__/repository/BookRespositoryMock";
import {BookRemover} from "../../../src/Books/Application/BookRemover";

describe('Book Remover', () => {
    it('should remove a book', async () => {
        const mockId = new BookId('4f608969-ec4c-4e66-bf70-3a98fe7d7ca4');
        const repository: BookRespositoryMock = new BookRespositoryMock();
        const removeBook = new BookRemover(repository);
        await removeBook.run(mockId);
        repository.assertLastRemoveExecutionWith(mockId);
    });
});
