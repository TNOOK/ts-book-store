import {Book} from "../Domain/Book";
import {BookRepository} from "../Domain/BookRepository";
import {BookId} from "../Domain/BookId";

export class BookFinder {
    constructor(private repository: BookRepository) {}

    async run(id: BookId): Promise<Book> {
        return this.repository.find(id);
    }

}