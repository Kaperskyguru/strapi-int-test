exports.up = function (knex) {
  return knex.schema.createTable("planets", function (table) {
    table.increments("id");
    table.string("name", 20).notNullable();
    table.string("description", 300).notNullable();
    table.string("pictureUrl", 255).notNullable();
    table.string("code", 30).notNullable();
    table.unique("code");
    // table.foreign("id").references("characters.planet_id");
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("planets");
};
