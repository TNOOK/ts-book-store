import {BookRepository} from "../../../../src/Books/Domain/BookRepository";
import {BookId} from "../../../../src/Books/Domain/BookId";
import {Book} from "../../../../src/Books/Domain/Book";
import {BookName} from "../../../../src/Books/Domain/BookName";
import {BookLength} from "../../../../src/Books/Domain/BookLength";

export class BookRespositoryMock implements BookRepository {
    private mockFind = jest.fn();
    private mockFindAll = jest.fn();
    private mockSave = jest.fn();
    private mockRemove = jest.fn();
    private readonly mockBooks: Book[] = [];

    constructor() {
        this.mockBooks = [new Book(new BookId('f8b5cae6-444b-487f-912d-d1e791e0b48f'), BookName.fromString('La biblia'), new BookLength(200))]
    }

    find(id: BookId): Book {
        this.mockFind(id);
        return this.mockBooks[0];
    }

    findAll(): Book[] {
        this.mockFindAll();
        return this.mockBooks;
    }

    save(book: Book): void {
        return this.mockSave(book);
    }

    remove(id: BookId): void {
        return this.mockRemove(id);
    }

    assertLastFindExecutionWith(expectedId: BookId): void {
        expect(this.mockFind).toHaveBeenCalledWith(expectedId);
    }

    assertLastFindAllExecutionTimes(expectedTimes: number): void {
        expect(this.mockFindAll).toHaveBeenCalledTimes(expectedTimes);
    }

    assertLastSaveExecutionWith(expectedBook: Book): void {
        expect(this.mockSave).toHaveBeenCalledWith(expectedBook);
    }

    assertLastRemoveExecutionWith(expectedId: BookId): void {
        expect(this.mockRemove).toHaveBeenCalledWith(expectedId);
    }
}