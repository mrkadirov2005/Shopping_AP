export const getProductsList = (state) => state.productsReducer.products;

export const getProductDetails = (state) => state.productReducer.product;
export const getProductDetailsLoader = (state) => state.productReducer.loading;

export const getBasket = (state) => state.basketReducer;
export const getBasketProducts = (state) => state.basketReducer.products;

export const getUser = (state) => state.userReducer.user;
export const getUserError = (state) => state.userReducer.error;
export const getUserLoading = (state) => state.userReducer.loading;
export const getIsLoggedIn = (state) => state.userReducer.isLoggedIn;
