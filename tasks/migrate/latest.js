const knex = require('knex');
const config = require('./../../config/db')

function latest() {
  const query = knex({
    client: 'pg',
    connection: config.connectionString()
  });

  return query.migrate
    .latest(config.migration)
    .catch(console.error)
    .then(query.destroy)
    ;
}

latest()
  .then(() => console.log('done.'))
  ;
