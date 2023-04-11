import { combineReducers } from "@reduxjs/toolkit";
import { productsReducer } from "./slices/productsSlice";
import { productReducer } from "./slices/productSlice";
import { basketReducer } from "./slices/basketSlice";
import { userReducer } from "./slices/userSlice";
import { modalReducer } from "./slices/modalSlice";

const rootReducer = combineReducers({
  productsReducer,
  productReducer,
  basketReducer,
  userReducer,
  modalReducer,
});

export const persistentStoreBlacklist = [];

export default rootReducer;
