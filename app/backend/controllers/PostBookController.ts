import Controller from "./Controller";
import {json, Request, Response} from 'express';
import {BookCreator} from "../../../src/Books/Application/BookCreator";
import {Book} from "../../../src/Books/Domain/Book";
import {BookId} from "../../../src/Books/Domain/BookId";
import {BookName} from "../../../src/Books/Domain/BookName";
import {BookLength} from "../../../src/Books/Domain/BookLength";

export default class PostBookController implements Controller {
    constructor(private bookCreator: BookCreator) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            await this.bookCreator.run(new Book(new BookId(req.body.id), BookName.fromString(req.body.name), new BookLength(req.body.length)));
        } catch (e) {
            console.log(e);
            res.status(100).send();
        }
        res.status(200).send();
        return undefined;
    }

}