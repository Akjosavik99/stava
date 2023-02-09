import React from "react";
import styled from "styled-components";
import stava_logo from "../assets/stava_logo.svg";
import { useNavigate } from "react-router-dom";
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

const LogInPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <SignupContainer>
      <ContentContainer
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/");
        }}
      >
        <LogoContainer>
          <Logo src={stava_logo} />
        </LogoContainer>
        <Triangle></Triangle>
        <FormContainer>
          <InputContainer>
            <InputFieldLogInPage placeholder="Username" name="username" />
          </InputContainer>
          <InputContainer>
            <InputFieldLogInPage placeholder="Password" name="password" />
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
