import React, { useState } from "react";
import styled from "styled-components";
import stava_logo from "../assets/stava_logo.svg";
import { useNavigate } from "react-router-dom";
import useRegisterValidators from "../components/useRegisterValidator";

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
  text-align: center;
  align-items: end;
  justify-content: flex-end;
  justify-self: end;
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

const InputField = styled.input<{ isError: boolean }>`
  background-color: ${({ isError }) => (isError ? "#f74040" : "white")};
  border-radius: 1rem;
  height: 3rem;
  width: 10rem;
  margin: 0 auto;
  padding: 0rem 1rem;
  border-color: ${({ isError }) => (isError ? "red" : "black")};
`;

const PasswordContainer = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: #f16a00;
  text-align: center;
`;

const SubmitButton = styled.button`
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

const SignUpPage: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { errors, validateForm, onBlurField } = useRegisterValidators(form);

  /* const onUpdateField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  }; */
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

  return (
    <SignupContainer>
      <ContentContainer
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e.currentTarget);
          navigate("/login");
        }}
      >
        <LogoContainer>
          <Logo src={stava_logo} />
        </LogoContainer>
        <Triangle>
          <UsernameContainer>
            <InputField
              id="username"
              name="username"
              value={form.username}
              onChange={onUpdateField}
              onBlur={onBlurField}
              style={{ margin: "auto" }}
              placeholder="Username"
              isError={errors.username.error && errors.username.dirty}
            />
            {errors.username.dirty && errors.username.error ? (
              <p style={{ borderColor: "red", margin: "0" }}>
                {errors.username.message}
              </p>
            ) : null}
          </UsernameContainer>
        </Triangle>
        <PasswordContainer>
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
          {errors.password.dirty && errors.password.error ? (
            <p style={{ borderColor: "red", margin: "0" }}>
              {errors.password.message}
            </p>
          ) : null}
          <InputField
            id="password"
            name="confirmPassword"
            type={"password"}
            value={form.confirmPassword}
            onChange={onUpdateField}
            onBlur={onBlurField}
            placeholder="Confirm password"
            isError={errors.password.error && errors.password.dirty}
          />
          {errors.confirmPassword.dirty && errors.confirmPassword.error ? (
            <p
              style={{
                display: "inline-block",
                margin: "0",
                padding: "0",
              }}
            >
              {errors.confirmPassword.message}
            </p>
          ) : null}
          <SubmitButton
            disabled={
              errors.username.error ||
              errors.username.error ||
              errors.confirmPassword.error
            }
          >
            Create user
          </SubmitButton>
        </PasswordContainer>
      </ContentContainer>
    </SignupContainer>
  );
};

export default SignUpPage;
