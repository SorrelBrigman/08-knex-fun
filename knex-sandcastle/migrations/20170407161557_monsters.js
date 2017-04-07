
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('monsters', (table)=>{
      table.increments();
      table.string('monster_name').notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('monsters');
};
