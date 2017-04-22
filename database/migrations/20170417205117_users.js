
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', table => {
    table.bigIncrements('id');
    table.string('email').notNullable();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
