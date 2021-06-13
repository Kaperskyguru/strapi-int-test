require("dotenv").config();
import "cross-fetch/polyfill";
import { gql } from "apollo-boost";
import { getClient } from "../utils/client";
import Planet from "../models/Planet";

const authClient = getClient(process.env.TOKEN);
const client = getClient();

describe("Tests the Planet", () => {
  it("should create a new planet", async () => {
    const createPlanet = gql`
      mutation {
        createPlanet(
          planetInfo: {
            name: "Test 6"
            description: "This is a test Planet"
            code: "AA-AAA-12"
            pictureUrl: "This is a URL"
          }
        ) {
          name
          id
        }
      }
    `;
    const res = await authClient.mutate({
      mutation: createPlanet,
    });
    const id = parseInt(res.data.createPlanet.id);
    const user = await Planet.findById(id);
    await expect(user).toMatchObject({
      name: "Test 6",
      id: id,
    });
  });

  it("should not allow an unauthenticated request create a Planet ", async () => {
    const createTodo = gql`
      mutation {
        createPlanet(
          planetInfo: {
            name: "Test 6"
            description: "This is a test Planet"
            code: "AA-AAA-12"
            pictureUrl: "This is a URL"
          }
        ) {
          name
          id
        }
      }
    `;

    await expect(
      client.mutate({
        mutation: createTodo,
      })
    ).rejects.toThrow(
      "Network error: Response not successful: Received status code 500"
    );
  });

  it("should return all planets", async () => {
    const queryPlanet = gql`
      query {
        planets(page: 1) {
          name
          code
        }
      }
    `;
    const res = await authClient.query({
      query: queryPlanet,
    });
    await expect(res.data.planets).toEqual(
      expect.arrayContaining([
        {
          __typename: "Planet",
          name: "Malastare",
          code: "EM-PVA-98",
        },
      ])
    );
  });

  it("should return all planets by Code", async () => {
    const planet = await Planet.findByCode("FN-BBA-22");
    await expect(planet).not.toBeNull();
  });

  it("should check required page number", async () => {
    const queryPlanet = gql`
      query {
        planets(page: 0) {
          name
          code
        }
      }
    `;

    await expect(
      authClient.query({
        query: queryPlanet,
      })
    ).rejects.toThrow("GraphQL error: Page must be greater than zero");
  });

  it("should check required page size", async () => {
    const queryPlanet = gql`
      query {
        planets(page: 1, pageSize: 200) {
          name
          code
        }
      }
    `;

    await expect(
      authClient.query({
        query: queryPlanet,
      })
    ).rejects.toThrow("GraphQL error: Page Size must be between 1 and 100");
  });
});
