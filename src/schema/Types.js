const { gql } = require("apollo-server-koa");

module.exports = gql`
  scalar Date
  scalar DateTime

  type Planet {
    id: ID!
    name: String!
    description: String!
    code: String
    pictureUrl: String
    population: Int!
    characters: [Character]!
  }

  type Character {
    id: ID!
    name: String!
    description: String!
    bornAt: DateTime!
    pictureUrl: String
    planet: Planet!
  }

  type Query {
    planets(page: Int = 1, pageSize: Int = 10): [Planet!]!
    characters(
      page: Int = 1
      pageSize: Int = 10
      planet: String
      birthDate: Date
    ): [Character!]!
    character(id: Int!): Character!
  }

  type Mutation {
    createPlanet(planetInfo: planetInput): Planet!

    createCharacter(characterInfo: characterInput): Character!
  }

  input planetInput {
    name: String!
    description: String!
    code: String!
    pictureUrl: String!
  }

  input characterInput {
    name: String!
    description: String!
    bornAt: DateTime!
    planet: String!
    pictureUrl: String!
  }
`;
