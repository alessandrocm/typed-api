const knex = require('knex');
const config = require('./../../config/db')

function createDb() {
  const query = knex({
    client: 'pg',
    connection: config.connectionString('postgres'),
    migrations: config.migration
  });

  return query
    .raw(`
      CREATE DATABASE ${config.connection.database}
        ENCODING = 'UTF8'
        LC_COLLATE = 'en_US.UTF-8'
        LC_CTYPE = 'en_US.UTF-8'
        CONNECTION LIMIT = -1
    `)
    .catch(console.error)
    .then(query.destroy)
  ;
}

createDb()
  .then(() => console.log('done.'))
  ;
