const Knex = require("../config/database.js");
const Planet = require("./Planet.js");
const table = "characters";
const Helper = require("../utils/Helpers");

class Character {
  static async all({ page, pageSize, planet, birthDate }) {
    if (page < 1) {
      throw new Error("Page must start from 1");
    }

    if (pageSize && (pageSize < 1 || pageSize > 100)) {
      throw new Error("Page Size must be between 1 and 100");
    }

    if (birthDate && !Helper.isIsoDate(birthDate)) {
      throw new Error("Birth Date must be in this format (e.g 1970-01-01)");
    }
    try {
      return await Knex(table)
        .offset(page)
        .limit(pageSize)
        .then((characters) => {
          return Promise.all(
            characters.map((character) => {
              return Knex("planets")
                .join("characters", "characters.planet", "planets.code")
                .where("code", character.planet)
                .then((planet) => {
                  character.planet = planet[0];
                  return character;
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
      const characters = await Knex(table)
        .where("id", parseInt(id))
        .then((characters) => {
          return Promise.all(
            characters.map((character) => {
              return Knex("planets")
                .join("characters", "characters.planet", "planets.code")
                .where("code", character.planet)
                .then((planet) => {
                  character.planet = planet[0];
                  return character;
                });
            })
          );
        });

      return characters[0];
    } catch (error) {
      console.log(error);
    }
  }

  static async create(data) {
    const planet = await Planet.findByCode(data.planet);
    if (!planet) {
      throw new Error("Planet code not found");
    }

    if (data.name.length > 20 || data.description.length < 1) {
      throw new Error("Name must be between 1 and 20");
    }

    if (data.description.length > 300 || data.description.length < 15) {
      throw new Error("Decription must be between 20 and 300");
    }

    try {
      data.planet_id = planet.id;
      const insertedRow = await Knex(table).insert(data).returning("*");
      return insertedRow[0];
    } catch (error) {
      throw new Error("Internal Server Exception");
    }
  }
}

module.exports = Character;
