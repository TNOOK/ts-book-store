import { Express } from 'express';
import GetBooksController from "../../controllers/GetBooksController";
import GetBookController from "../../controllers/GetBookController";
import PostBookController from "../../controllers/PostBookController";
import container from "../dependency-injection";

export const register = (app: Express) => {
  const getBooksController: GetBooksController = container.get('BookStore.GetBooksController'),
      getBookController: GetBookController = container.get('BookStore.GetBookController'),
      postBookController: PostBookController = container.get('BookStore.PostBookController');
  app.get('/books/', getBooksController.run.bind(getBooksController));
  app.get('/books/:id', getBookController.run.bind(getBookController));
  app.post('/books/', postBookController.run.bind(postBookController));
};
