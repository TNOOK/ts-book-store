import {json, Request, Response} from 'express';
import Controller from "./Controller";
import {BookFinder} from "../../../src/Books/Application/BookFinder";
import {BookId} from "../../../src/Books/Domain/BookId";

export default class GetBookController implements Controller {
    constructor(private bookFinder: BookFinder) {}

    async run(req: Request, res: Response): Promise<void> {
        let books,
            id:BookId = new BookId(req.params.id);
        try {
            books = await this.bookFinder.run(id);
        } catch (e) {
            console.log(e);
        }
        res.status(200).json(books);
    }
}
