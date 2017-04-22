import * as path from 'path';
import * as express from 'express';
import * as Debug from 'debug';
import * as bodyParser from 'body-parser';
import { logRequests } from './lib/logging/request';
import V1 from './routes/v1';

const debug = Debug('typed-api:application');

export default class Application {
    public app : express.Application;
    public root : express.Router;

    constructor() {
      this.app = express();
      this.root = express.Router();
      this.middleware();
      this.routes();
    }

    private middleware() : void {
      debug('loading middleware');
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({ extended: false }));
      this.app.use(logRequests());
    }

    private routes() : void {
      debug('loading routes');
      const defaultRoutes = new V1();
      this.root.use('/', defaultRoutes.router);
      this.root.use('/v1', defaultRoutes.router);
      this.app.use('/api', this.root);
    }
}
