import {
  Box,
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Fieldset,
  Input,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import NextLink from "next/link";

export function LoginForm({ register, onSubmit, errors, isValid, ...props }) {
  return (
    <Box as="form" onSubmit={onSubmit} {...props}>
      <VStack mb="10">
        <Heading size="3xl" textAlign="center">
          Давно не виделись!
        </Heading>
        <Text textAlign="center">Войдите, чтобы продолжить общение</Text>
      </VStack>

      <Fieldset.Root size="lg" invalid={!!errors.root}>
        <Fieldset.Content>
          <Field
            label="Никнейм или почта"
            invalid={!!errors.username}
            errorText={errors.username?.message}
            required
          >
            <Input
              {...register("username", {
                required: "Введите никнейм или почту",
              })}
              required={null}
            />
          </Field>

          <Field
            label="Пароль"
            invalid={!!errors.password}
            errorText={errors.password?.message}
            required
          >
            <PasswordInput
              {...register("password", {
                required: "Введите пароль",
              })}
              required={null}
            />
          </Field>
        </Fieldset.Content>

        <Stack gap="4">
          <Button type="submit" disabled={!isValid}>
            Войти
          </Button>

          <Button variant="outline" asChild>
            <NextLink href="/registration">Зарегистрироваться</NextLink>
          </Button>
        </Stack>

        <Fieldset.ErrorText alignSelf="center" mt="10">
          {errors.root?.message}
        </Fieldset.ErrorText>
      </Fieldset.Root>
    </Box>
  );
}
