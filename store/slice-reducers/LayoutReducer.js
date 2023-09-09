import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  header: "",
};

const layoutSlice = createSlice({
  name: "Layout",
  initialState,
  reducers: {
    header(state, action) {
      state.header = action.payload;
    },
  },
});

export const { header } = layoutSlice.actions;

export default layoutSlice.reducer;
