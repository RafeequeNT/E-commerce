import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./product";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});
