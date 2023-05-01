import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  googleUser: {},
  email: "",
  password: "",
  address: "",
  clef: 10,
  phone: "",
};

const Web3slice = createSlice({
  name: "Web3",
  initialState,
  reducers: {
    modifyClef(state, action) {
      state.clef = state.clef + action.payload;
    },
    updateAddress(state, action) {
      state.address = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    },
    Password(state, action) {
      state.password = action.payload;
    },
    User(state, action) {
      state.googleUser = action.payload;
    },
  },
});

export const { updateAddress, setEmail, Password, User, modifyClef } =
  Web3slice.actions;
export default Web3slice.reducer;
