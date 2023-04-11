import { createSlice } from "@reduxjs/toolkit";
import { AsyncThunks } from "../../actions";
// import { mockProducts } from "../../../mocks/products";

const initialState = {
  product: {},
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AsyncThunks.getProductDetails.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.product = {};
    });
    builder.addCase(
      AsyncThunks.getProductDetails.fulfilled,
      (state, action) => {
        state.loading = false;
        state.error = null;
        state.product = action.payload;
      }
    );
    builder.addCase(AsyncThunks.getProductDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
