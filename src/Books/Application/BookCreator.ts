import {BookRepository} from "../Domain/BookRepository";
import {Book} from "../Domain/Book";
import {GetBookControllerResponse} from "../Domain/GetBookControllerResponse";
import {BookId} from "../Domain/BookId";
import {BookName} from "../Domain/BookName";
import {BookLength} from "../Domain/BookLength";

export class BookCreator {
    constructor(private repository: BookRepository) {}

    async run(id: BookId, name: BookName, length: BookLength): Promise<void> {
        this.repository.save(new Book(id, name, length));
    }
}