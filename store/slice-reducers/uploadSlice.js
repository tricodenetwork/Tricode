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
    delFile: (state, action) => {
      console.log(action.payload);
      state.filess.splice(action.payload, 1);
    },
  },
});

export const { setFilee, delFile } = uploadSlice.actions;

export default uploadSlice.reducer;
