import * as http from 'http';
import * as Debug from 'debug';
import App from './app';
import { web, normalizePort } from '../config/web';
import * as Promise from 'bluebird';
global.Promise = require('bluebird');

const debug = Debug('typed-api:server');

const port = normalizePort(web.port);
const server = http.createServer((new App()).app);
server.listen(web.port);
server.on('listening', onListening);
server.on('error', onError);

function onError(error: NodeJS.ErrnoException): void {
  debug('error %s', error.code);
  if (error.syscall !== 'listen') throw error;
  let bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
  switch(error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening(): void {
  let addr = server.address();
  let bind = (typeof addr === 'string') ? `pipe ${addr}` : `port ${addr.port}`;
  console.log(`Listening on ${bind}`);
}
