import {Book} from "../Domain/Book";
import {BookRepository} from "../Domain/BookRepository";

export class BooksFinder {
    constructor(private repository: BookRepository) {}

    async run(): Promise<Book[]> {
        return this.repository.findAll();
    }

}