import {Book} from "../Domain/Book";
import {BookRepository} from "../Domain/BookRepository";
import {GetBookControllerResponse} from "../Domain/GetBookControllerResponse";

export class BooksFinder {
    constructor(private repository: BookRepository) {}

    async run(): Promise<GetBookControllerResponse[]> {
        const books = this.repository.findAll();

        let res: GetBookControllerResponse[] = [];

        books.forEach((book: Book) => {
            res.push(new GetBookControllerResponse(
                book.id.uuid,
                book.name.value,
                book.length.value))
        });

        return res;
    }

}