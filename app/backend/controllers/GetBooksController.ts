import {json, Request, Response} from 'express';
import Controller from "./Controller";
import {BookFinder} from "../../../src/Books/Application/BooksFinder";

export default class GetBooksController implements Controller {
    constructor(private bookFinder: BookFinder) {}

    async run(req: Request, res: Response): Promise<void> {
        let book;

        try {
            book = await this.bookFinder.run();
        } catch (e) {
            console.log(e);
        }
        res.status(200).json(book);
    }
}
