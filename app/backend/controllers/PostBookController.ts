import Controller from "./Controller";
import {Request, Response} from 'express';
import {BookCreator} from "../../../src/Books/Application/BookCreator";
import {BookId} from "../../../src/Books/Domain/BookId";
import {BookName} from "../../../src/Books/Domain/BookName";
import {BookLength} from "../../../src/Books/Domain/BookLength";
import {ErrorInfoControllerResponse} from "../../../src/Books/Domain/ErrorInfoControllerResponse";

export default class PostBookController implements Controller {
    constructor(private bookCreator: BookCreator) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            await this.bookCreator.run(new BookId(req.body.id), BookName.fromString(req.body.name), new BookLength(req.body.length));
        } catch (e) {
            res.status(202).json(new ErrorInfoControllerResponse(e.message));
        }
        res.status(202).send();
    }

}