import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, StyledButton, StyledForm, StyledInput } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerScheme } from "../../helpers/validationScheme";

const RegistrationForm = ({ registerCustomer, error, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    redolver: yupResolver(registerScheme),
  });

  const onSubmit = (data) => {
    registerCustomer({
      username: data.username,
      phoneNumber: data.phonrNumber,
      password: data.password,
      consfirmPassword: data.confirmPassword,
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <StyledInput
        type='text'
        placeholder='Username'
        {...register("username")}
        error={errors?.username}
      />
      <p>{errors?.username?.message}</p>
      <StyledInput
        type='tel'
        placeholder='Phone Number'
        {...register("phoneNumber")}
        error={errors?.phoneNumber}
      />
      <p>{errors?.phoneNumber?.message}</p>

      <StyledInput
        type='password'
        placeholder='Password'
        {...register("password")}
        error={errors?.password}
      />
      <p>{errors?.password?.message}</p>
      <StyledInput
        type='password'
        placeholder='Confirm Password'
        {...register("confirmPassword")}
        error={errors?.confirmPassword}
      />
      <p>{errors?.confirmPassword?.message}</p>
      <StyledButton type='submit'>
        {isLoading ? "Loading..." : "Register"}
      </StyledButton>
    </StyledForm>
  );
};

export default RegistrationForm;
