
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'user1@email.com', 'first_name': 'Bob', 'last_name': 'Michael'},
        {email: 'user2@email.com', 'first_name': 'Rob', 'last_name': 'Mitchell'},
        {email: 'user3@email.com', 'first_name': 'Tom', 'last_name': 'Mikael'}
      ]);
    });
};
