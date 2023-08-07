import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "search",
  initialState: {
    searchCity: "",
  },

  reducers: {
    setSearch: (state, action) => {
      state.searchCity = action.payload;
    },
  },
});

export const { setSearch } = SearchSlice.actions;

export default SearchSlice.reducer;
