const knex = require('knex');
const config = require('./../../config/db')

function dropdb() {
  const query = knex({
    client: 'pg',
    connection: config.connectionString('postgres'),
    migrations: config.migration
  });

  return query.raw(`DROP DATABASE IF EXISTS ${config.connection.database}`)
    .catch(console.error)
    .then(query.destroy)
    ;
}

dropdb()
  .then(() => console.log('done.'))
  ;
