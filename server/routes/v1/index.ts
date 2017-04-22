import * as express from 'express';
import * as Debug from 'debug';
import * as users from './users';

const debug = Debug('typed-api:application');

export default class V1 {
  public router : express.Router;

  constructor() {
    this.router = express.Router();
    this.middleware();
    this.routes();
  }

  middleware() {
    debug('loading v1 middleware');
  }

  userRoutes() {
    debug('loading v1 user routes');
    const userRoutes = express.Router();
    userRoutes.get('/', users.getUsers);
    userRoutes.post('/', users.postUsers);
    userRoutes.put('/:email', users.putUsers);
    this.router.use('/users', userRoutes);
  }

  routes() {
    debug('loading v1 routes');
    this.userRoutes();
  }
}
