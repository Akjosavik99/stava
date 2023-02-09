import React, { useState } from "react";
import stava_logo from "../assets/stava_logo.svg";
import { useNavigate } from "react-router-dom";
import useRegisterValidators from "../components/useRegisterValidator";
import arrow from "../assets/arrow.svg";
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
} from "../components/Form";

const SignUpPage: React.FC = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const { errors, validateForm, onBlurField } = useRegisterValidators(form);

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
              <p style={{ borderColor: "red", margin: "0.2rem 0 0 0" }}>
                {errors.username.message}
              </p>
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
              <p style={{ borderColor: "red", margin: "0" }}>
                {errors.password.message}
              </p>
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
              <p
                style={{
                  margin: "0",
                  padding: "0",
                }}
              >
                {errors.confirmPassword.message}
              </p>
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
