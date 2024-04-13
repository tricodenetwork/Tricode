// uploadSlice.js
import { createSlice } from "@reduxjs/toolkit";

const reportSlice = createSlice({
  name: "report",
  initialState: {
    filess: [],
    status: "",
    highlights: [],
    summary: "",
    date: null,
    link: "",
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    setLink: (state, action) => {
      state.link = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setProjectFiles: (state, action) => {
      state.filess.push(action.payload);
    },
    setHighlights: (state, action) => {
      state.highlights.push(action.payload);
    },
    removeHighlight: (state, action) => {
      state.highlights.pop();
    },
    delFile: (state, action) => {
      state.filess.splice(action.payload, 1);
    },
  },
});

export const {
  setProjectFiles,
  setStatus,
  setLink,
  setDate,
  setSummary,
  setHighlights,
  removeHighlight,
  delFile,
} = reportSlice.actions;

export default reportSlice.reducer;
