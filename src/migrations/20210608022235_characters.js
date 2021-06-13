exports.up = function (knex) {
  return knex.schema.createTable("characters", function (table) {
    table.increments("id");
    table.string("name", 255).notNullable();
    table.text("description").notNullable();
    table.string("planet", 255).notNullable();
    table.datetime("bornAt").notNullable();
    table.text("pictureUrl").notNullable();
    table.integer("planet_id").unsigned();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("characters");
};
