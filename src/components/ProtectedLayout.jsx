import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../routes/Routes";
import { getIsLoggedIn } from "../store/selectors";

const ProtectedLayout = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  if (!isLoggedIn) return <Navigate to={ROUTES.AUTH} replace />;

  return <Outlet /> || children;
};

export default ProtectedLayout;
