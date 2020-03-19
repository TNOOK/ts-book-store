import { Express } from 'express';
import GetBooksController from "../../controllers/GetBooksController";
import container from "../dependency-injection";

export const register = (app: Express) => {
  const controller: GetBooksController = container.get('BookStore.GetBooksController');
  app.get('/books/:id', controller.run.bind(controller));
};
