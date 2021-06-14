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
    client: process.env.DB_CLIENT || "postgresql",
    connection: {
      database: process.env.DB_DATABASE || "strapi_test_db",
      user: process.env.DB_USER || "postgres",
      password: process.env.DB_PASSWORD || "",
      host: process.env.DB_HOST || "127.0.0.1",
    },
    ssl: true,
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
};
