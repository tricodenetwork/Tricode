import { createSlice } from "@reduxjs/toolkit";
const initialState = { projects: [], project: {} };

const layoutSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    initializeProjects(state, action) {
      state.projects = action.payload;
    },
    setProject(state, action) {
      state.project = state.projects.find(
        (item) => item._id.toString() == action.payload
      );
    },
  },
});

export const { initializeProjects, setProject } = layoutSlice.actions;

export default layoutSlice.reducer;
