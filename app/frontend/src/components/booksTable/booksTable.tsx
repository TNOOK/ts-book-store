import React from 'react';
import './booksTable.css';

const BooksTable = (props: { books: any[] }) => {
    return (
        <table className='booksTable'>
            <thead>
            <BooksTableHeader/>
            </thead>
            <tbody>
            {props.books.map((book: { name: string; id: string, length: number }) => <Book name={book.name}
                                                                                           key={book.id}
                                                                                           bookId={book.id}
                                                                                           length={book.length}/>)}
            </tbody>
        </table>
    );
}

const BooksTableHeader = () => {
    return (
        <tr className='booksTableHeader'>
            <th className='booksTableHeader-element'>Name</th>
            <th className='booksTableHeader-element'>id</th>
            <th className='booksTableHeader-element'>Length</th>
        </tr>
    );
}

const Book = (props: { name: string, bookId: string, length: number }) => {
    return (
        <tr className='book'>
            <td className='book-attr'>{props.name}</td>
            <td className='book-attr'>{props.bookId}</td>
            <td className='book-attr'>{props.length}</td>
        </tr>
    )
}

export {BooksTable}