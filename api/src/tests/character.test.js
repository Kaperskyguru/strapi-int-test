require("dotenv").config();
import "cross-fetch/polyfill";
import { gql } from "apollo-boost";
import { getClient } from "../utils/client";
import Character from "../models/Character";

const authClient = getClient(process.env.TOKEN);

// afterAll(() => setTimeout(() s=> process.exit(), 1000));

describe("Tests the Character", () => {
  it("should successfully create a character", async () => {
    const createCharacter = gql`
      mutation {
        createCharacter(
          characterInfo: {
            name: "TEST"
            description: "This is a test description"
            pictureUrl: "https://images.unsplash.com/photo-1588422333078-44ad73367bcb"
            bornAt: "1970-01-01T00:00:00Z"
            planet: "AA-AAA-11"
          }
        ) {
          name
          id
        }
      }
    `;
    const res = await authClient.mutate({
      mutation: createCharacter,
    });

    const id = parseInt(res.data.createCharacter.id);
    const character = await Character.findById(id);
    await expect(character).toMatchObject({
      name: "TEST",
      id,
    });
  });

  it("should return all characters", async () => {
    const queryPlanet = gql`
      query {
        characters(page: 1) {
          name
          planet {
            code
          }
        }
      }
    `;
    const res = await authClient.query({
      query: queryPlanet,
    });
    await expect(res.data.characters).toEqual(
      expect.arrayContaining([
        {
          __typename: "Character",
          name: "TEST",
          planet: {
            __typename: "Planet",
            code: "AA-AAA-11",
          },
        },
      ])
    );
  });

  it("should return a single character by ID", async () => {
    const queryPlanet = gql`
      query {
        character(id: 1) {
          name
          planet {
            code
          }
        }
      }
    `;
    const res = await authClient.query({
      query: queryPlanet,
    });
    await expect(res.data.character).toEqual(
      expect.objectContaining({
        __typename: "Character",
        name: "Chewbacca",
        planet: {
          __typename: "Planet",
          code: "FN-BBA-22",
        },
      })
    );
  });

  it("should check required page number", async () => {
    const queryCharacter = gql`
      query {
        characters(page: 0, pageSize: 100) {
          name
          planet {
            code
          }
        }
      }
    `;

    await expect(
      authClient.query({
        query: queryCharacter,
      })
    ).rejects.toThrow("GraphQL error: Page must start from 1");
  });

  it("should check required page size", async () => {
    const queryCharacter = gql`
      query {
        characters(page: 1, pageSize: 200) {
          name
          planet {
            code
          }
        }
      }
    `;

    await expect(
      authClient.query({
        query: queryCharacter,
      })
    ).rejects.toThrow("GraphQL error: Page Size must be between 1 and 100");
  });
});
