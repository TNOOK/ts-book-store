import {BookId} from "../Domain/BookId";
import {Book} from "../Domain/Book";
import {BookRepository} from "../Domain/BookRepository";
import {BookName} from "../Domain/BookName";
import {BookLength} from "../Domain/BookLength";

export class BookFinder {
    constructor(private repository: BookRepository) {}

    async run(): Promise<Book[]> {
        return this.repository.findAll();
    }

}