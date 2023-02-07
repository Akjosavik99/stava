import React from "react";
import styled from "styled-components";
import stava_logo from "../assets/stava_logo.svg";

const Logo = styled.img`
  width: 10rem;
  margin: 0 auto;
  padding-bottom: 0.3rem;
`;

const SignupContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
  justify-content: space-around;
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
        <Logo src={stava_logo} />
        <SubmitButton>Logg inn</SubmitButton>
      </ContentContainer>
    </SignupContainer>
  );
};

export default SignUpPage;
