import {json, Request, Response} from 'express';
import Controller from "./Controller";
import {BookId} from "../../../src/Books/Domain/BookId";
import {BookRemover} from "../../../src/Books/Application/BookRemover";

export default class DeleteBookController implements Controller {
    constructor(private bookRemover: BookRemover) {}

    async run(req: Request, res: Response): Promise<void> {
        let id:BookId = new BookId(req.params.id);
        try {
            await this.bookRemover.run(id);
        } catch (e) {
            console.log(e);
        }
        res.status(200).send();
    }
}
