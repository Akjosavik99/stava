import styled from "styled-components";

export const Logo = styled.img`
  width: 10rem;
  margin: 0 auto;
  padding-bottom: 0.3rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

export const Triangle = styled.div`
  z-index: 100;
  width: 100%;
  height: 30%;
  background-color: #f16a00;
  min-height: 100px;
  clip-path: polygon(0% 101%, 50% 0%, 100% 101%);
`;

export const SignupContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

export const ContentContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: auto;
`;

export const InputField = styled.input<{ isError: boolean }>`
  background-color: ${({ isError }) => (isError ? "#f74040" : "white")};
  border-radius: 1rem;
  height: 2.25rem;
  width: 14rem;
  margin: 0 auto;
  padding: 0rem 1rem;
  border-color: ${({ isError }) => (isError ? "red" : "black")};
`;

export const InputFieldLogInPage = styled.input`
  border-color: black;
  border-radius: 1rem;
  height: 2.25rem;
  width: 14rem;
  margin: 0 auto;
  padding: 0rem 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #f16a00;
  text-align: center;
  padding-top: 2rem;
`;

export const CreateUserContainer = styled.div`
  display: flex;
  height: 20%;
  flex-direction: column;
  justify-content: space-center;
`;

export const CreateUserButton = styled.button`
  border-color: black;
  border-radius: 5rem;
  background-color: white;
  height: 2rem;
  width: 8rem;
  margin: auto;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
`;

export const LogInButton = styled.button`
  border-color: black;
  border-radius: 5rem;
  background-color: white;
  height: 3rem;
  width: 10rem;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const InputContainer = styled.div`
  margin: 0 0 0rem 0;
  height: 4.2rem;
`;

export const SubmitButton = styled.button`
  border-radius: 5rem;
  background-color: white;
  height: 4rem;
  width: 10rem;
  margin: 0 auto;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-color: black;

  &:disabled {
    cursor: default;
    background-color: #958686;
  }
`;

export const BackButton = styled.div`
  margin: auto auto auto 2rem;
  align-self: flex-end;
`;

export const Arrow = styled.img`
  height: 3rem;
  width: 3rem;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  margin: 0;
  padding: 0;
`;
