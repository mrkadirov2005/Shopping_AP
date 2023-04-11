import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/auth";
import LoginForm from "../../components/Forms/LoginForm";
import RegistrationForm from "../../components/Forms/RegistrationForm";
import { ROUTES } from "../../routes/Routes";
import { AsyncThunks } from "../../store/actions";
import { getUserLoading } from "../../store/selectors";
import { FormContainer, FormTab, FormTabs, Wrapper } from "./styles";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoading = useSelector(getUserLoading);
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const registerCustomer = async (userDetails) => {
    await authApi.register(userDetails);
    setActiveTab("login");
  };

  const loginCustomer = async (userDetails) => {
    await dispatch(AsyncThunks.login(userDetails));
    navigate(ROUTES.PRODUCTS_LIST);
  };

  return (
    <Wrapper>
      <FormContainer>
        <FormTabs>
          <FormTab
            isActive={activeTab === "login"}
            onClick={() => handleTabClick("login")}>
            Login
          </FormTab>
          <FormTab
            isActive={activeTab === "register"}
            onClick={() => handleTabClick("register")}>
            Register
          </FormTab>
        </FormTabs>

        {activeTab === "login" ? (
          <LoginForm loginCustomer={loginCustomer} isLoading={isLoading} />
        ) : (
          <RegistrationForm
            registerCustomer={registerCustomer}
            isLoading={isLoading}
          />
        )}
      </FormContainer>
    </Wrapper>
  );
};

export default AuthPage;
