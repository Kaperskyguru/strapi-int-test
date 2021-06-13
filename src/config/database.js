require("dotenv").config();

let environment = process.env.NODE_ENV || "development";

console.log(environment, "TEST TEST TEST");

const config = require("../../knexfile.js")[environment];

module.exports = require("knex")(config);
