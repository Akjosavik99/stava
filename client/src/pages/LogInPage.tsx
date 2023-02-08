import React from "react";
import styled from "styled-components";
import stava_logo from "../assets/stava_logo.svg";
import { useNavigate } from "react-router-dom";

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
  /* flex-direction: column; */
  height: 100%;
`;

const Triangle = styled.div`
  z-index: 100;
  width: 100%;
  height: 30%;
  background-color: #f16a00;
  clip-path: polygon(0% 101%, 50% 0%, 100% 101%);
`;

const SignupContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const ContentContainer = styled.form`
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
  justify-content: space-evenly;
  background-color: #f16a00;
`;

const CreateUserContainer = styled.div`
  display: flex;
  height: 20%;
  flex-direction: column;
  justify-content: space-center;
`;

const LogInButton = styled.button`
  border-radius: 5rem;
  background-color: white;
  height: 4rem;
  width: 10rem;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
`;

const CreateUserButton = styled.button`
  border-radius: 5rem;
  background-color: white;
  border: 0;
  height: 2rem;
  width: 8rem;
  margin: auto;
  font-size: 1rem;
  font-weight: bold;
`;

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
        <Triangle>
          <UsernameContainer>
            <InputField
              style={{ alignSelf: "flex-end" }}
              placeholder="Username"
            />
          </UsernameContainer>
        </Triangle>
        <PasswordContainer>
          <InputField placeholder="Password" />
          <LogInButton id="logInButton">Log in</LogInButton>
          <CreateUserContainer>
            <h3 style={{ color: "white", textAlign: "center", margin: 0 }}>
              Don't have a user?
            </h3>
            <CreateUserButton onClick={() => navigate("/signup")}>
              Create user
            </CreateUserButton>
          </CreateUserContainer>
        </PasswordContainer>
      </ContentContainer>
    </SignupContainer>
  );
};

export default LogInPage;
