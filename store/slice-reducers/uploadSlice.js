// uploadSlice.js
import { createSlice } from "@reduxjs/toolkit";

const uploadSlice = createSlice({
  name: "upload",
  initialState: {
    filess: [],
    uploadProgress: 0,
    selectedFile: null,
    isDragging: false,
  },
  reducers: {
    setFilee: (state, action) => {
      state.filess.push(action.payload);
    },
  },
});

export const { setFilee } = uploadSlice.actions;

export default uploadSlice.reducer;
