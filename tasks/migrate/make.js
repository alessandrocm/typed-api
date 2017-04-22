const knex = require('knex');
const config = require('./../../config/db');
const argv = require('yargs').argv;
const {
  name
} = argv;

function make(migrationName) {
  const db = knex({
    client: 'pg',
    connection: config.connectionString('postgres')
  });

  return db.migrate
    .make(migrationName, config.migration)
    .catch(console.error)
    .then(db.destroy);
}

make(name)
  .then(() => console.log('done.'));
