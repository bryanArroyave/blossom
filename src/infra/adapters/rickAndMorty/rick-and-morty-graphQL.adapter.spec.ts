import RickAndMortyGraphQLAdapter from "./rick-and-morty-graphQL.adapter";
import GraphQLMockAdapter from "../../../../mocks/GraphQL.mock";
import IGraphQl from "../../ports/GraphQl.port";

describe("rick and morty GraphQL Adapter", () => {
  test("should return data", async () => {
    const graphQLAdapter: IGraphQl = new GraphQLMockAdapter();
    const rickAndMortyAdapter = new RickAndMortyGraphQLAdapter(graphQLAdapter);

    const response = await rickAndMortyAdapter.getCharacters(1);

    expect(response.length).toBe(2);
  });
});
