import { configureStore } from "@reduxjs/toolkit";
import countersReducers from "../features/counters/counters";

const store = configureStore({
  reducer: {
    counters: countersReducers,
  },
});

export default store;
