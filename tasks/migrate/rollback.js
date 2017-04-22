const knex = require('knex');
const config = require('./../../config/db')

function rollback() {
  const query = knex({
    client: 'pg',
    connection: config.connectionString()
  });

  return query.migrate
    .rollback(config.migration)
    .catch(console.error)
    .then(query.destroy)
    ;
}

rollback()
  .then(() => console.log('done.'))
  ;
