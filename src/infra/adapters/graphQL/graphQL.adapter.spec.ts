import { describe, expect, test } from "vitest";
import GraphQLAdapter from "./graphQL.adapter";
import { RICK_AND_MORTY_GRAPHQL_URL } from "../../../domain/rick-and-morty/constants/rick-and-morty.constants";

describe("GraphQL Adapter", () => {
  test("should return data from GraphQL server", async () => {
    const url = RICK_AND_MORTY_GRAPHQL_URL;
    const query = `
    
    query {
      characters(page: 1) {
        info {
          count
        }
        results {
          id
          name
          species
          image
          status
          gender
        }
      }
    }
    
  `;
    const adapter = new GraphQLAdapter();
    console.log(url, query);

    const result: any = await adapter.getQuery(url, query);
    console.log(result.characters.results);
    console.log("fin");

    expect(result).toBeDefined();
    expect(result.characters.results.length).toBeGreaterThan(0);
  });
});
