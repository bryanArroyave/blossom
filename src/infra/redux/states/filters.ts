import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice: any = createSlice({
  name: "filters",
  initialState: {
    text: "",
    character: "",
    specie: "",
  },
  reducers: {
    addFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { addFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
