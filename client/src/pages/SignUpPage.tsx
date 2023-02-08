import React from "react";
import styled from "styled-components";
import stava_logo from "../assets/stava_logo.svg";

const Logo = styled.img`
  width: 10rem;
  margin: 0 auto;
  padding-bottom: 0.3rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Triangle = styled.div`
  z-index: 100;
  width: 100%;
  height: 30%;
  background-color: #f16a00;
  clip-path: polygon(0% 100%, 50% 0%, 100% 100%);
`;

const SignupContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`;

const InputField = styled.input`
  background-color: white;
  border-radius: 2rem;
  height: 3rem;
  width: 10rem;
  margin: 0 auto;
  padding: 0rem 1rem;
`;

const PasswordContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f16a00;
`;

const SubmitButton = styled.button`
  border-radius: 5rem;
  background-color: white;
  height: 4rem;
  width: 10rem;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: bold;
`;

const SignUpPage: React.FC = () => {
  return (
    <SignupContainer>
      <ContentContainer>
        <LogoContainer>
          <Logo src={stava_logo} />
        </LogoContainer>
        <Triangle>
          <UsernameContainer>
            <InputField style={{ margin: "auto" }} placeholder="Username" />
          </UsernameContainer>
        </Triangle>
        <PasswordContainer>
          <InputField placeholder="Password" />
          <InputField placeholder="Confirm password" />
          <SubmitButton>Create user</SubmitButton>
        </PasswordContainer>
      </ContentContainer>
    </SignupContainer>
  );
};

export default SignUpPage;
