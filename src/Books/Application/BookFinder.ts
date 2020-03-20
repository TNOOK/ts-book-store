import {Book} from "../Domain/Book";
import {BookRepository} from "../Domain/BookRepository";
import {BookId} from "../Domain/BookId";
import {GetBookControllerResponse} from "../Domain/GetBookControllerResponse";

export class BookFinder {
    constructor(private repository: BookRepository) {}

    async run(id: BookId): Promise<GetBookControllerResponse> {
        const book = this.repository.find(id);
        return new GetBookControllerResponse(
            book.id.uuid,
            book.name.value,
            book.length.value
        );
    }

}