import {BookRepository} from "../Domain/BookRepository";
import {Book} from "../Domain/Book";
import {GetBookControllerResponse} from "../Domain/GetBookControllerResponse";

export class BookCreator {
    constructor(private repository: BookRepository) {}

    async run(book: Book): Promise<void> {
        this.repository.create(book);
    }
}