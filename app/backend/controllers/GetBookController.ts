import {json, Request, Response} from 'express';
import Controller from "./Controller";
import {BookFinder} from "../../../src/Books/Application/BookFinder";
import {BookId} from "../../../src/Books/Domain/BookId";
import {ErrorInfoControllerResponse} from "../../../src/Books/Domain/ErrorInfoControllerResponse";
import httpStatus from "http-status";

export default class GetBookController implements Controller {
    constructor(private bookFinder: BookFinder) {}

    async run(req: Request, res: Response): Promise<void> {
        let data,
            id:BookId;
        try {
            id = new BookId(req.params.id);
            data = await this.bookFinder.run(id);
        } catch (e) {
            res.status(httpStatus.BAD_REQUEST).json(new ErrorInfoControllerResponse(e.message));
        }
        res.status(httpStatus.OK).json(data);
    }
}
