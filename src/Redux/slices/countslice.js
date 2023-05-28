import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "count",
  initialState: {
    value: 15,
    input: 5,
  },
  reducers: {
    setCount: (state, action) => {
      state.value = action.payload;
    },
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCount, setInput } = countSlice.actions;

export default countSlice.reducer;
