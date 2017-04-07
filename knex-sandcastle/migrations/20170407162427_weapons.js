
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('weapons', (table)=>{
      table.increments();
      table.string('name').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('weapons');
};
