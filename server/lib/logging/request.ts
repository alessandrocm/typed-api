import * as Debug from 'debug';
import { Request, RequestHandler } from 'express';

export function logRequests() : RequestHandler {
  const debug = Debug('typed-api:api');
  return (req, res, next) => {
    debug(`${req.method} ${req.url}`);
    next();
  };
}
