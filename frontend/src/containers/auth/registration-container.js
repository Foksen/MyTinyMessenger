"use client";

import { RegistrationForm } from "@/components/auth/registration-form";
import { useForm } from "react-hook-form";

export function RegistrationContainer({ ...props }) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    const username = data.username;
    const email = data.email;
    const password = data.password;
    const passwordRepeated = data.passwordRepeated;

    if (password !== passwordRepeated) {
      setError("passwordRepeated", {
        type: "manual",
        message: "Пароли не совпадают",
      });
      return;
    }

    if (username === "test") {
      setError("username", {
        type: "409",
        message: "Этот ник уже занят",
      });
      return;
    }

    if (email === "test@email.com") {
      setError("email", {
        type: "409",
        message: "Эта почта уже занята",
      });
    }

    if (password.length < 6) {
      setError("password", {
        type: "409",
        message: "Пароль слишком короткий",
      });
    }

    if (password.length > 16) {
      setError("password", {
        type: "409",
        message: "Пароль слишком длинный",
      });
    }

    if (!/[A-Za-z]/.test(password)) {
      setError("password", {
        type: "409",
        message: "Пароль должен содержать хотя бы одну букву",
      });
    }

    if (!/\d/.test(password)) {
      setError("password", {
        type: "409",
        message: "Пароль должен содержать хотя бы одну цифру",
      });
    }
  });

  return (
    <RegistrationForm
      register={register}
      onSubmit={onSubmit}
      errors={errors}
      isValid={isValid}
      {...props}
    />
  );
}
