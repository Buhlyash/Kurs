import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productsSlice from "./productsSlice";

export const store = configureStore({
  reducer: { counter: counterReducer, products: productsSlice },
});
