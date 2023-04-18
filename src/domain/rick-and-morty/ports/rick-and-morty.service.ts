import { RickAndMortyDTO } from "../dtos";

export default interface IRickAndMortyService {
  getCharacters(page: number): Promise<RickAndMortyDTO[]>;
}
