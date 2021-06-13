const Knex = require("../config/database.js");
const Helpers = require("../utils/Helpers.js");
const table = "planets";

class Planet {
  static async all({ page, pageSize }) {
    if (page < 1) {
      throw new Error("Page must be greater than zero");
    }

    if (pageSize && (pageSize < 1 || pageSize > 100)) {
      throw new Error("Page Size must be between 1 and 100");
    }

    try {
      return await Knex(table)
        .offset(page)
        .limit(pageSize)
        .then((planets) => {
          return Promise.all(
            planets.map((planet) => {
              return Knex("characters")
                .join("planets", "characters.planet", "planets.code")
                .where("planet", planet.code)
                .then((characters) => {
                  planet.characters = characters;
                  return planet;
                });
            })
          );
        });
    } catch (error) {
      console.log(error);
    }
  }

  static async findById(id) {
    try {
      return await Knex(table).where("id", parseInt(id)).first();
    } catch (error) {
      console.log(error);
    }
  }

  static async findByCode(code) {
    try {
      return await Knex(table).where("code", code).first();
    } catch (error) {
      console.log(error);
    }
  }

  static async create(data) {
    if (data.name.length > 20 || data.description.length < 1) {
      throw new Error("Name must be between 1 and 20");
    }

    if (data.description.length > 300 || data.description.length < 15) {
      throw new Error("Decription must be between 20 and 300");
    }

    if (!Helpers.isValidCodeFormat(data.code)) {
      throw new Error("Code must match the required format (AA-AAA-11)");
    }

    try {
      const insertedRow = await Knex(table)
        .insert(data)
        .returning("*")
        .onConflict("code")
        .merge();
      return insertedRow[0];
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Planet;
