import { configureStore } from "@reduxjs/toolkit";
import LayoutReducer from "./slice-reducers/LayoutReducer";

// import storage from "redux-persist/lib/storage";
// import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// import { useDispatch, useSelector } from 'react-redux'

// const persistConfig = {
//   key: "root",
//   storage,
// };

const allReducers = combineReducers({
  layout: LayoutReducer,
});

// const persistedReducer = persistReducer(persistConfig, allReducers);

const store = configureStore({
  reducer: allReducers,
  middleware: [thunk],
  // devTools: process.env.NODE_ENV !== "production",
});
// export const persistor = persistStore(store);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
