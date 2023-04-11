import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Router, { ROUTES } from "./routes/Routes";
import { getIsLoggedIn } from "./store/selectors";

function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      if (pathname === ROUTES.LOGIN) {
        return;
      }
      return navigate(ROUTES.REGISTER);
    }
  }, [isLoggedIn, pathname, navigate]);

  return (
    <>
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
