// uploadSlice.js
import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    talents: [],
  },
  reducers: {
    setTalents: (state, action) => {
      state.talents = action.payload;
    },
  },
});

export const { setTalents } = usersSlice.actions;

export default usersSlice.reducer;
