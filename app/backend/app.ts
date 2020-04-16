import bodyParser from 'body-parser';
import express from 'express';
import { registerRoutes } from './config/routes';

const app: express.Express = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

registerRoutes(app);

export default app;
