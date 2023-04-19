import IGraphQl from "../src/infra/ports/GraphQl.port";

export default class GraphQLMockAdapter implements IGraphQl {
  async getQuery<T>(url: string, query: string): Promise<T> {
    const data = {
      characters: {
        info: { count: 2 },
        results: [
          {
            id: "1",
            name: "Rick Sanchez",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            status: "Alive",
            gender: "Male",
          },
          {
            id: "2",
            name: "Morty Smith",
            species: "Human",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            status: "Alive",
            gender: "Male",
          },
        ],
      },
    };
    return Promise.resolve(data as T);
  }
}
