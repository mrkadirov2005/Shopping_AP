import React from "react";
import { useForm } from "react-hook-form";
import {
  Error,
  ErrorMessage,
  StyledButton,
  StyledForm,
  StyledInput,
} from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginScheme } from "../../helpers/validationScheme";

const LoginForm = ({ loginCustomer, error, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(loginScheme),
  });

  const onSubmit = (data) => {
    loginCustomer({ phoneNumber: data.phoneNumber, password: data.password });
  };
  const result = watch();
  console.log(result);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledInput
        type='text'
        placeholder='Phone Number'
        {...register("phoneNumber")}
        error={errors?.phoneNumber}
        // value={phoneNumber}
        // onChange={(event) => setPhoneNumber(event.target.value)}
      />
      <Error>{errors?.phoneNumber?.message}</Error>
      <StyledInput
        type='password'
        placeholder='Password'
        {...register("password")}
        error={errors?.password}
      />
      <Error>{errors?.password?.message}</Error>
      <StyledButton type='submit'>
        {isLoading ? "Loading..." : "Login"}
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
