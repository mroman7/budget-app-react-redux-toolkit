import { configureStore } from "@reduxjs/toolkit";
import budgetReducer from "./slices/budgetSlice";

export const store = configureStore({
  reducer: {
    budget: budgetReducer
  }
});
