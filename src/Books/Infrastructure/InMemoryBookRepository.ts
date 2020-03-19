import {BookRepository} from "../Domain/BookRepository";
import {BookId} from "../Domain/BookId";
import {Book} from "../Domain/Book";
import {v4} from "uuid";
import {BookName} from "../Domain/BookName";
import {BookLength} from "../Domain/BookLength";

export class InMemoryBookRepository implements BookRepository {
    find(id: BookId): Book {
        return new Book(
            new BookId(v4()),
            BookName.fromString('Don Quijote'),
            new BookLength(20)
        );
    }

    findAll(): Book[] {
        return [
            new Book(
                new BookId(v4()),
                BookName.fromString('Don Quijote'),
                new BookLength(20)
            ),
            new Book(
                new BookId(v4()),
                BookName.fromString('La Biblia'),
                new BookLength(500)
            )
        ];
    }
}