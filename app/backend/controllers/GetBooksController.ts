import {json, Request, Response} from 'express';
import Controller from "./Controller";
import {BooksFinder} from "../../../src/Books/Application/BooksFinder";
import {ErrorInfoControllerResponse} from "../../../src/Books/Domain/ErrorInfoControllerResponse";

export default class GetBooksController implements Controller {
    constructor(private bookFinder: BooksFinder) {}

    async run(req: Request, res: Response): Promise<void> {
        let books;

        try {
            books = await this.bookFinder.run();
        } catch (e) {
            res.status(202).json(new ErrorInfoControllerResponse(e.message));
        }
        res.status(202).json(books);
    }
}
