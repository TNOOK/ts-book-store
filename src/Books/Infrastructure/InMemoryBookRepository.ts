import {BookRepository} from "../Domain/BookRepository";
import {BookId} from "../Domain/BookId";
import {Book} from "../Domain/Book";
import {v4} from "uuid";
import {BookName} from "../Domain/BookName";
import {BookLength} from "../Domain/BookLength";

export class InMemoryBookRepository implements BookRepository {
    private books: Book[];
    constructor() {
        this.books = [
            new Book(new BookId(v4()), BookName.fromString('La biblia'), new BookLength(200)),
            new Book(new BookId(v4()), BookName.fromString('El Quijote'), new BookLength(230)),
            new Book(new BookId(v4()), BookName.fromString('Las Reliquias de la muerte'), new BookLength(300)),
            new Book(new BookId(v4()), BookName.fromString('Node for dummies'), new BookLength(800))
        ]
    }

    find(id: BookId): Book {
        const book =  this.books.find(book => book.id === id);
        if (typeof book === 'undefined') {
            new Error('There is not any book with that id');
        }
        // @ts-ignore
        return book;
    }

    findAll(): Book[] {
        return this.books;
    }
}