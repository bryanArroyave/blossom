import { configureStore } from "@reduxjs/toolkit";
import { RickAndMortyDTO } from "../../domain/rick-and-morty/dtos";
import { characterSlice } from "./states/characters";
import Filters from "../../domain/rick-and-morty/dtos/filter";
import { filtersSlice } from "./states/filters";

export interface AppStore {
  characters: RickAndMortyDTO[];
  filters: Filters;
}

export default configureStore<AppStore>({
  reducer: {
    characters: characterSlice.reducer,
    filters: filtersSlice.reducer,
  },
});
