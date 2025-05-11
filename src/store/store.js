import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../slice/themeslice"

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default store;
