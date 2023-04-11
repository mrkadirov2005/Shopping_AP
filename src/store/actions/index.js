import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginThunk } from "./thunks/authThunk";
import {
  getProductDetailsThunk,
  getProductsThunk,
} from "./thunks/productsThunk";
import { getMyProfileThunk } from "./thunks/usersThunk";

export const AsyncThunks = {
  login: createAsyncThunk("login", loginThunk),
  getProducts: createAsyncThunk("getProducts", getProductsThunk),
  getProductDetails: createAsyncThunk(
    "getProductDetails",
    getProductDetailsThunk
  ),
  getMyProfile: createAsyncThunk("getMyProfile", getMyProfileThunk),
};
