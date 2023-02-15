import React, { useState } from "react";
// import styled from "styled-components";
import stava_logo from "../assets/stava_logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Loading from "../components/Loading";
import {
  InputFieldLogInPage,
  Logo,
  Triangle,
  LogoContainer,
  ContentContainer,
  SignupContainer,
  FormContainer,
  InputContainer,
  CreateUserContainer,
  CreateUserButton,
  ErrorText,
  SubmitButton,
} from "../components/Form";

type FormData = {
  username: string;
  password: string;
};

export const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    async (formData: FormData) => {
      await axios.post("http://localhost:3001/api/user/auth", formData);
    },
    {
      onSuccess: () => {
        console.log("Success");
        navigate("/");
      },
      onError: () => {
        console.log("Wrong username/password");
      },
    }
  );
};

const LogInPage: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const { mutate, isError, isLoading } = useLoginMutation();

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
        <Triangle></Triangle>
        <FormContainer>
          <InputContainer>
            <InputFieldLogInPage
              placeholder="Username"
              name="username"
              onChange={onUpdateField}
              value={form.username}
              type={"username"}
            />
          </InputContainer>
          <InputContainer>
            <InputFieldLogInPage
              placeholder="Password"
              name="password"
              onChange={onUpdateField}
              value={form.password}
              type={"password"}
            />
            {isError && <ErrorText>Wrong username/password</ErrorText>}
          </InputContainer>
          <InputContainer>
            <SubmitButton
              id="logInButton"
              disabled={
                form.username.length === 0 || form.password.length === 0
              }
              style={{ height: "3rem", fontSize: "1.5rem" }}
            >
              Log in
            </SubmitButton>
          </InputContainer>
          <CreateUserContainer>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                margin: 0,
              }}
            >
              Don't have a user?
            </h3>
            <CreateUserButton onClick={() => navigate("/signup")}>
              Create user
            </CreateUserButton>
          </CreateUserContainer>
        </FormContainer>
      </ContentContainer>
    </SignupContainer>
  );
};

export default LogInPage;
