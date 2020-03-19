import { Express } from 'express';
import GetBooksController from "../../controllers/GetBooksController";
import GetBookController from "../../controllers/GetBookController";
import container from "../dependency-injection";

export const register = (app: Express) => {
  const controller: GetBooksController = container.get('BookStore.GetBooksController'),
      getBookController: GetBookController = container.get('BookStore.GetBookController');
  app.get('/books/', controller.run.bind(controller));
  app.get('/books/:id', getBookController.run.bind(getBookController));
};
