require("dotenv").config();

let environment = process.env.NODE_ENV || "development";

const config = require("../../knexfile.js")[environment];

if (config.production.client !== "sqlite3")
  if (environment && environment === "production") {
    const pg = require("pg");
    pg.defaults.ssl = true;
  }
module.exports = require("knex")(config);
