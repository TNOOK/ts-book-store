import {json, Request, Response} from 'express';
import Controller from "./Controller";
import {BookFinder} from "../../../src/Books/Application/BookFinder";

export default class StatusGetController implements Controller {
    constructor(private bookFinder: BookFinder) {}

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
