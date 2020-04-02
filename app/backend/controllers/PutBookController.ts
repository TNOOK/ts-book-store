import Controller from "./Controller";
import {Request, Response} from 'express';
import {BookCreator} from "../../../src/Books/Application/BookCreator";
import {BookId} from "../../../src/Books/Domain/BookId";
import {BookName} from "../../../src/Books/Domain/BookName";
import {BookLength} from "../../../src/Books/Domain/BookLength";
import {ErrorInfoControllerResponse} from "../../../src/Books/Domain/ErrorInfoControllerResponse";
import httpStatus from "http-status";

export default class PutBookController implements Controller {
    constructor(private bookCreator: BookCreator) {}

    async run(req: Request, res: Response): Promise<void> {
        try {
            await this.bookCreator.run(new BookId(req.params.id), BookName.fromString(req.body.name), new BookLength(req.body.length));
        } catch (e) {
            res.status(httpStatus.BAD_REQUEST).json(new ErrorInfoControllerResponse(e.message));
        }
        res.status(httpStatus.OK).send();
    }
}