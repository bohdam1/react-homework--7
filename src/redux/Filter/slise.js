import { createSlice } from "@reduxjs/toolkit";

export const filterInitState = {
  filter: "",
}

const filterslise = createSlice({
  name: "filter",
  initialState: filterInitState,
  reducers: {
    filterContact: (state, {payload}) => {
      state.filter = payload;
    }
  }
});

export const { filterContact } = filterslise.actions; // Зміна на правильну назву дії
export default filterslise.reducer;
