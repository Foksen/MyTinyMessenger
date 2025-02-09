"use client";

import { LoginForm } from "@/components/auth/login-form";
import { useForm } from "react-hook-form";

export function LoginContainer({ ...props }) {
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
    const password = data.password;

    if (!(username == "test" && password == "test")) {
      setError("root", {
        type: "403",
        message: "Пользователь не найден или неверный пароль",
      });
    }
  });

  return (
    <LoginForm
      register={register}
      onSubmit={onSubmit}
      errors={errors}
      isValid={isValid}
      {...props}
    />
  );
}
