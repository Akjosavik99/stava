import React, { useState } from "react";
// import styled from "styled-components";
import stava_logo from "../assets/stava_logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
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
  LogInButton,
  CreateUserButton,
} from "../components/Form";

type FormData = {
  username: string;
  password: string;
};

const useLoginMutation = () => {
  const navigate = useNavigate();
  return useMutation(
    async (formData: FormData) => {
      await axios.post("http://localhost:3001/api/user/auth", formData);
    },
    {
      onSuccess: () => {
        console.log("Sucess yay!");
        navigate("/");
      },
    }
  );
};

const LogInPage: React.FC = () => {
  const [form, setForm] = useState({
    username: "abc",
    password: "abc",
  });

  const { mutate } = useLoginMutation();

  const navigate = useNavigate();

  return (
    <SignupContainer>
      <ContentContainer
        onSubmit={(e) => {
          e.preventDefault();
          mutate(form);
          console.log("Sucess :D");
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
              // value={form.username}
            />
          </InputContainer>
          <InputContainer>
            <InputFieldLogInPage
              placeholder="Password"
              name="password"
              // value={form.password}
            />
          </InputContainer>
          <InputContainer>
            <LogInButton id="logInButton">Log in</LogInButton>
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
