import React from 'react';
import {BooksTable} from "../booksTable/booksTable";
import {findBooks} from "../../api/findBooks";
import {BookCreator} from "../bookCreator/bookCreator";
import './App.css';

class App extends React.Component<any, { books: any[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            books: []
        }
    }
    async componentDidMount(): Promise<void> {
        const data = await findBooks();
        this.setState({books: data});
    }

    render() {
        const {books} = this.state;
        return (
            <div className='app'>
                <BooksTable books={books}/>
                <BookCreator/>
            </div>
        );
    }
}

export default App;
