import { createSlice, current } from "@reduxjs/toolkit";

export const characterSlice: any = createSlice({
  name: "characters",
  initialState: [],
  reducers: {
    addCharacters: (state, action) => {
      return action.payload;
    },
  },
});

export const { addCharacters } = characterSlice.actions;

export default characterSlice.reducer;
