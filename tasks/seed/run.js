const knex = require('knex');
const config = require('./../../config/db');
const argv = require('yargs').argv;
const {
  name
} = argv;

function run(seedFile) {

  const db = knex({
    client: 'pg',
    connection: config.connectionString()
  });

  if(seedFile) {
    const run = require(`../../database/seeds/${seedFile}`);
    return run
      .seed(db, Promise)
      .catch(console.error)
      .then(db.destroy);
  }
  else {
    return db.seed
      .run(config.seed)
      .catch(console.error)
      .then(db.destroy);
  }
}

run(name)
  .then(() => console.log('done.'));
