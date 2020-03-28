import {json, Request, Response} from 'express';
import Controller from "./Controller";
import {BookFinder} from "../../../src/Books/Application/BookFinder";
import {BookId} from "../../../src/Books/Domain/BookId";
import {ErrorInfoControllerResponse} from "../../../src/Books/Domain/ErrorInfoControllerResponse";

export default class GetBookController implements Controller {
    constructor(private bookFinder: BookFinder) {}

    async run(req: Request, res: Response): Promise<void> {
        let data,
            id:BookId;
        try {
            id = new BookId(req.params.id);
            data = await this.bookFinder.run(id);
        } catch (e) {
            res.status(202).json(new ErrorInfoControllerResponse(e.message));
        }
        res.status(202).json(data);
    }
}
