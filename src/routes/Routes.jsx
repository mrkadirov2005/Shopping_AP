import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AuthPage from "../pages/AuthPage/AuthPage";
import UserPage from "../pages/UserPage";
import ProtectedLayout from "../components/ProtectedLayout";
import BasketPage from "../pages/BasketPage/BasketPage";
import ProductListingPage from "../pages/ProductListingPage/ProductListingPage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";

export const ROUTES = {
  AUTH: "/auth",
  PRODUCTS_LIST: "/products",
  PRODUCT_DETAILS: "/products/:id",
  MY_PROFILE: "/user",
  BASKET: "/basket",
};

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTES.PRODUCTS_LIST} />} />
      <Route path={ROUTES.AUTH} element={<AuthPage />} />
      <Route path={ROUTES.PRODUCTS_LIST} element={<ProductListingPage />} />
      <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />

      <Route element={<ProtectedLayout />}>
        <Route path={ROUTES.MY_PROFILE} element={<UserPage />} />
        <Route path={ROUTES.BASKET} element={<BasketPage />} />
      </Route>

      <Route path='*' element={<p>Nout found page</p>} />
    </Routes>
  );
};

export default Router;
