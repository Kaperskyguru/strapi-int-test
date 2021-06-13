const Planet = require("../models/Planet");
const Character = require("../models/Character");
const { DateTimeResolver, DateResolver } = require("graphql-scalars");

module.exports = {
  Query: {
    planets: async (_, data) => await Planet.all(data),
    characters: async (_, data) => await Character.all(data),
    character: async (_, { id }) => await Character.findById(id),
  },
  Mutation: {
    createPlanet: async (_, data) => await Planet.create(data.planetInfo),
    createCharacter: async (_, data) =>
      await Character.create(data.characterInfo),
  },

  DateTime: DateTimeResolver,
  Date: DateResolver,
};
