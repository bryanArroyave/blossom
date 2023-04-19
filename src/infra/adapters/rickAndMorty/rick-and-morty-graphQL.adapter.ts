import { RICK_AND_MORTY_GRAPHQL_URL } from "../../../domain/rick-and-morty/constants/rick-and-morty.constants";
import { RickAndMortyDTO as RickAndMortyDomainDTO } from "../../../domain/rick-and-morty/dtos";
import { RickAndMortyDTO as RickAndMortyInfraDTO } from "../../../infra/dtos/";
import IRickAndMortyService from "../../../domain/rick-and-morty/ports/rick-and-morty.service";
import GraphQLAdapter from "../graphQL/graphQL.adapter";
import IGraphQl from "../../ports/GraphQl.port";

export default class RickAndMortyGraphQLAdapter
  implements IRickAndMortyService
{
  private readonly URL = RICK_AND_MORTY_GRAPHQL_URL;

  constructor(private readonly graphQLAdapter: IGraphQl) {}

  async getCharacters(page: number): Promise<RickAndMortyDomainDTO[]> {
    const GET_USERS = `
    query {
      characters(page: ${page}) {
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

    const response: any = await this.graphQLAdapter.getQuery(
      this.URL,
      GET_USERS
    );

    const characters: RickAndMortyDomainDTO[] = response.characters.results;

    return characters.map((character: RickAndMortyInfraDTO) => ({
      id: character.id,
      image: character.image,
      species: character.species,
      name: character.name,
      status: character.status,
      gender: character.gender,
      favorite: character.id == 1,
      comments: [],
    }));
  }
}
