import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCharacters } from "../../redux/states/characters";
import GraphQLAdapter from "../../adapters/graphQL/graphQL.adapter";
import RickAndMortyGraphQLAdapter from "../../adapters/rickAndMorty/rick-and-morty-graphQL.adapter";
import { RickAndMortyDTO } from "../../../domain/rick-and-morty/dtos";
import { AppStore } from "../../redux/store";
import Character from "./components/Character";
import Header from "./components/Header";
import { VscArrowDown, VscArrowUp, VscFold } from "react-icons/vsc";
export interface CharactersInterface {}

const Characters: React.FC<CharactersInterface> = () => {
  const [sort, setSort] = useState<{
    sort: boolean;
    asc: boolean;
  }>({
    sort: false,
    asc: false,
  });
  const dispatch = useDispatch();

  let characters = useSelector((store: AppStore) => store.characters);
  let filters = useSelector((store: AppStore) => store.filters);

  const applyFilters = (): RickAndMortyDTO[] => {
    let filteredCharacters = [...characters];

    if (filters.text) {
      filteredCharacters = filteredCharacters.filter((char) => {
        return (
          char.name.toLowerCase().includes(filters.text.toLowerCase()) ||
          char.gender.toLowerCase().includes(filters.text.toLowerCase())
        );
      });
    }

    if (filters.specie) {
      filteredCharacters = filteredCharacters.filter((char) => {
        return char.species.toLowerCase() === filters.specie.toLowerCase();
      });
    }

    if (filters.character) {
      filteredCharacters = filteredCharacters.filter((char) => {
        return (
          (char.favorite && filters.character.toLowerCase() === "starred") ||
          (!char.favorite && filters.character.toLowerCase() === "other")
        );
      });
    }

    return filteredCharacters;
  };

  const charactersFiltered: RickAndMortyDTO[] = applyFilters().filter(
    (character) => {
      return !character.favorite;
    }
  );
  const favoritesFiltered: RickAndMortyDTO[] = applyFilters().filter(
    (character) => {
      return character.favorite;
    }
  );

  const sortCharacters = (
    characters: RickAndMortyDTO[],
    asc: boolean
  ): RickAndMortyDTO[] => {
    return characters.sort((a, b) =>
      asc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
  };
  useEffect(() => {
    const graphQLAdapter = new GraphQLAdapter();
    const tickAndMortyGraphQLAdapter = new RickAndMortyGraphQLAdapter(
      graphQLAdapter
    );

    tickAndMortyGraphQLAdapter.getCharacters(1).then((result) => {
      dispatch(addCharacters(result));
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10 top-0 left-0 w-full md:w-[375px] md:min-w-[375px] mx-5 h-screen overflow-auto pr-5">
        <Header />
        <div className="flex  justify-end ">
          <div
            title="Sort asc"
            onClick={() => {
              setSort({ sort: true, asc: true });
            }}
            className="flex justify-center self-center  w-[16px] h-[16px] hover:cursor-pointer"
          >
            <VscArrowUp
              className="self-"
              color={sort.sort && sort.asc ? "#5A3696" : "#EEE3FF"}
            />
          </div>
          <div
            title="No sort"
            onClick={() => {
              setSort({ sort: false, asc: false });
            }}
            className="flex justify-center self-center  w-[16px] h-[16px] hover:cursor-pointer "
          >
            <VscFold
              className="self-"
              color={!sort.sort ? "#5A3696" : "#EEE3FF"}
            />
          </div>
          <div
            title="Sort desc"
            onClick={() => {
              setSort({ sort: true, asc: false });
            }}
            className="flex justify-center self-center  w-[16px] h-[16px] hover:cursor-pointer"
          >
            <VscArrowDown
              className="self-"
              color={sort.sort && !sort.asc ? "#5A3696" : "#EEE3FF"}
            />
          </div>
        </div>
        <div>
          <p className="text-color-secondary">
            STARRED CHARACTERS ({favoritesFiltered.length})
          </p>

          <div>
            {(sort.sort
              ? sortCharacters(favoritesFiltered, sort.asc)
              : favoritesFiltered
            ).map((character) => (
              <Character key={character.name} character={character} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-color-secondary">
            CHARACTERS ({charactersFiltered.length})
          </p>
          <div>
            {(sort.sort
              ? sortCharacters(charactersFiltered, sort.asc)
              : charactersFiltered
            ).map((character) => (
              <Character key={character.name} character={character} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Characters;
