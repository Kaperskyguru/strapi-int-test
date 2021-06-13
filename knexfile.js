const path = require("path");

const BASE_PATH = path.join(__dirname, "src");

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "strapi_test_db",
      user: "postgres",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
      tableName: "knex_migrations",
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },

  test: {
    client: "postgresql",
    connection: {
      database: "strapi_test_db",
      user: "postgres",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(BASE_PATH, "migrations"),
      tableName: "knex_migrations",
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "strapi_test_db",
      user: "postgres",
      password: "",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(BASE_PATH, "migrations"),
    },
    seeds: {
      directory: path.join(BASE_PATH, "seeds"),
    },
  },
};
