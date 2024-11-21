import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./slice-reducers/uploadSlice";
import userReducer from "./slice-reducers/userSlice";
import projectsReducer from "./slice-reducers/projectSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const persistConfig = {
  key: "root",
  storage,
};

const allReducers = combineReducers({
  user: userReducer,
  projects: projectsReducer,
  upload: uploadReducer,
});

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
export const persistor = persistStore(store);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
