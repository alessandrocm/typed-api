import { connectionString, connection } from './../../config/db';
import * as knex from 'knex';

let pool : knex = null;

export default function query(table:string) : knex.QueryBuilder {
    if (!pool) {
      pool = knex({
        client: 'pg',
        connection: connectionString(),
        pool: connection.pool,
        acquireConnectionTimeout: connection.timeout
      });
    }

    return pool(table);
}
