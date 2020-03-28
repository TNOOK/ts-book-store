import {BookRepository} from "../Domain/BookRepository";
import {BookId} from "../Domain/BookId";

export class BookRemover {
    constructor(private repository: BookRepository) {}

    async run(id: BookId): Promise<void> {
        this.repository.remove(id);
    }
}