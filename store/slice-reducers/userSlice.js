import { createSlice } from "@reduxjs/toolkit";
const initialState = { user: {} };

const layoutSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { initializeUser } = layoutSlice.actions;

export default layoutSlice.reducer;
