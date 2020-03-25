import {BookRepository} from "../Domain/BookRepository";
import {BookId} from "../Domain/BookId";
import {Book} from "../Domain/Book";
import {v4} from "uuid";
import {BookName} from "../Domain/BookName";
import {BookLength} from "../Domain/BookLength";

export class InMemoryBookRepository implements BookRepository {
    private readonly books: Book[];
    constructor() {
        this.books = [
            new Book(new BookId('f8b5cae6-444b-487f-912d-d1e791e0b48f'), BookName.fromString('La biblia'), new BookLength(200)),
            new Book(new BookId('558dfe75-109a-4c73-9ca4-5f5f0eb4a27a'), BookName.fromString('El Quijote'), new BookLength(230)),
            new Book(new BookId('f26f1808-ce3d-4723-ad35-4fdbee310520'), BookName.fromString('Las Reliquias de la muerte'), new BookLength(300)),
            new Book(new BookId('4f608969-ec4c-4e66-bf70-3a98fe7d7ca4'), BookName.fromString('Node for dummies'), new BookLength(800))
        ]
    }

    find(id: BookId): Book {
        const book:Book | undefined =  this.books.find(book => book.id.toString() === id.toString());
        if (typeof book === 'undefined') {
            throw new Error('There is not any book with that id');
        }
        // @ts-ignore
        return book;
    }

    findAll(): Book[] {
        return this.books;
    }

    save(book: Book): void {
        this.books.push(book);
        console.log('New book added', book);
    }
}