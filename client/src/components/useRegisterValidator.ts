import { useState } from "react";

import {
  UsernameValidator,
  PasswordValidator,
  ConfirmPasswordValidator,
} from "./Validators";

type RegisterForm = {
  username: string;
  password: string;
  confirmPassword: string;
};

const touchErrors = (errors: Object) => {
  return Object.entries(errors).reduce((acc, [field, fieldError]) => {
    (acc as any)[field] = {
      ...fieldError,
      dirty: true,
    };
    return acc;
  }, {});
};

const useRegisterValidator = (form: RegisterForm) => {
  const [errors, setErrors] = useState({
    username: {
      dirty: false,
      error: false,
      message: "",
    },
    password: {
      dirty: false,
      error: false,
      message: "",
    },
    confirmPassword: {
      dirty: false,
      error: false,
      message: "",
    },
  });

  const validateForm = ({
    form,
    field,
    errors,
    forceTouchErrors = false,
  }: {
    form: RegisterForm;
    field: string;
    errors: any;
    forceTouchErrors?: boolean;
  }) => {
    let isValid = true;

    // Create a deep copy of the errors
    let nextErrors = JSON.parse(JSON.stringify(errors));

    // Force validate all the fields
    if (forceTouchErrors) {
      nextErrors = touchErrors(errors);
    }

    const { username, password, confirmPassword } = form;

    if (nextErrors.username.dirty && (field ? field === "username" : true)) {
      const usernameMessage = UsernameValidator(username);
      nextErrors.username.error = !!usernameMessage;
      nextErrors.username.message = usernameMessage;
      if (!!usernameMessage) isValid = false;
    }

    if (nextErrors.password.dirty && (field ? field === "password" : true)) {
      const passwordMessage = PasswordValidator(password);
      nextErrors.password.error = !!passwordMessage;
      nextErrors.password.message = passwordMessage;
      if (!!passwordMessage) isValid = false;
    }

    if (
      nextErrors.confirmPassword.dirty &&
      (field ? field === "confirmPassword" : true)
    ) {
      const confirmPasswordMessage = ConfirmPasswordValidator(
        confirmPassword,
        form
      );
      nextErrors.confirmPassword.error = !!confirmPasswordMessage;
      nextErrors.confirmPassword.message = confirmPasswordMessage;
      if (!!confirmPasswordMessage) isValid = false;
    }

    setErrors(nextErrors);

    return {
      isValid,
      errors: nextErrors,
    };
  };

  const onBlurField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const field = e.target.name;
    const fieldError = (errors as any)[field];
    if (fieldError.dirty) return;

    const updatedErrors = {
      ...errors,
      [field]: {
        ...(errors as any)[field],
        dirty: true,
      },
    };

    validateForm({ form, field, errors: updatedErrors });
  };

  return {
    validateForm,
    onBlurField,
    errors,
  };
};

export default useRegisterValidator;
