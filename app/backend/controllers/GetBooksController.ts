import {json, Request, Response} from 'express';
import Controller from "./Controller";
import {BooksFinder} from "../../../src/Books/Application/BooksFinder";

export default class GetBooksController implements Controller {
    constructor(private bookFinder: BooksFinder) {}

    async run(req: Request, res: Response): Promise<void> {
        let books;

        try {
            books = await this.bookFinder.run();
        } catch (e) {
            console.log(e);
        }
        res.status(200).json(books);
    }
}
