
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('heroes', (table)=>{
      table.increments();
      table.string('name').notNullable();
      table.specificType('weapons', knex.raw('text[]'));
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('heroes');
};
