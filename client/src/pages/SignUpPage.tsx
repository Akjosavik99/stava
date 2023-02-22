import React, { useState } from "react";
import stava_logo from "../assets/logo/stava_logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import { useMutation } from "@tanstack/react-query";
import useRegisterValidators from "../components/useRegisterValidator";
import arrow from "../assets/div/arrow.svg";
import {
  Logo,
  LogoContainer,
  Triangle,
  SignupContainer,
  ContentContainer,
  InputField,
  FormContainer,
  InputContainer,
  SubmitButton,
  BackButton,
  Arrow,
  ErrorText,
} from "../components/Form";

axios.defaults.withCredentials = true;

type FormData = {
  username: string;
  password: string;
  confirmPassword: string;
};

export const useSignupMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    async (formData: FormData) => {
      await axios.post("http://localhost:3001/api/user/register", formData);
    },
    {
      onSuccess: () => {
        console.log("Success");
        navigate("/login");
      },
      onError: () => {
        console.log("Error occurred");
      },
    }
  );
};

const SignUpPage: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { errors, validateForm, onBlurField } = useRegisterValidators(form);

  const { mutate, isLoading } = useSignupMutation();

  const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const nextFormState = {
      ...form,
      [field]: e.target.value,
    };
    setForm(nextFormState);
    if ((errors as any)[field].dirty)
      validateForm({
        form: nextFormState,
        errors,
        field,
      });
  };

  const navigate = useNavigate();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SignupContainer>
      <ContentContainer
        onSubmit={(e) => {
          e.preventDefault();
          mutate(form);
        }}
      >
        <LogoContainer>
          <Logo src={stava_logo} />
        </LogoContainer>
        <Triangle />
        <FormContainer>
          <InputContainer>
            <InputField
              id="username"
              name="username"
              type={"username"}
              value={form.username}
              onChange={onUpdateField}
              onBlur={onBlurField}
              placeholder="Username"
              isError={errors.username.error && errors.username.dirty}
            />
            {errors.username.dirty && errors.username.error && (
              <ErrorText>{errors.username.message}</ErrorText>
            )}
          </InputContainer>
          <InputContainer>
            <InputField
              id="password"
              name="password"
              type={"password"}
              value={form.password}
              onChange={onUpdateField}
              onBlur={onBlurField}
              placeholder="Password"
              isError={errors.password.error && errors.password.dirty}
            />

            {errors.password.dirty && errors.password.error && (
              <ErrorText>{errors.password.message}</ErrorText>
            )}
          </InputContainer>
          <InputContainer>
            <InputField
              id="password"
              name="confirmPassword"
              type={"password"}
              value={form.confirmPassword}
              onChange={onUpdateField}
              onBlur={onBlurField}
              placeholder="Confirm password"
              isError={
                errors.confirmPassword.error && errors.confirmPassword.dirty
              }
            />
            {errors.confirmPassword.dirty && errors.confirmPassword.error && (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            )}
          </InputContainer>
          <SubmitButton
            disabled={
              errors.username.error ||
              errors.username.error ||
              errors.confirmPassword.error ||
              form.username.length === 0 ||
              form.password.length === 0 ||
              form.confirmPassword.length === 0
            }
          >
            Create user
          </SubmitButton>
          <BackButton>
            <Arrow src={arrow} onClick={() => navigate("/login")} />
          </BackButton>
        </FormContainer>
      </ContentContainer>
    </SignupContainer>
  );
};

export default SignUpPage;
