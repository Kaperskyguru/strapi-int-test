const path = require("path");

const BASE_PATH = path.join(__dirname, "src");

module.exports = {
  development: {
    client: process.env.DB_CLIENT || "postgresql",
    connection: {
      database: process.env.POSTGRES_DB || "strapi_test_db",
      user: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "",
      host: process.env.POSTGRES_HOST || "127.0.0.1",
      port: process.env.POSTGRES_PORT || "5432",
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
      database: process.env.POSTGRES_DB || "strapi_test_db",
      user: process.env.POSTGRES_USER || "postgres",
      password: process.env.POSTGRES_PASSWORD || "",
      host: process.env.POSTGRES_HOST || "127.0.0.1",
      port: process.env.POSTGRES_PORT || "5432",
      ssl: {
        rejectUnauthorized: false,
      },
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
};
