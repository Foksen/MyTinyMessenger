import {
  Box,
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Fieldset,
  Input,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { Checkbox } from "@/components/ui/checkbox";
import NextLink from "next/link";

export function RegistrationForm({
  register,
  onSubmit,
  errors,
  isValid,
  ...props
}) {
  return (
    <Box as="form" onSubmit={onSubmit} {...props}>
      <VStack mb="10">
        <Heading size="3xl" textAlign="center">
          Добро пожаловать!
        </Heading>
        <Text textAlign="center">Зарегистрируйтесь, чтобы начать общение</Text>
      </VStack>

      <Fieldset.Root size="lg" invalid={!!errors.root}>
        <Fieldset.Content>
          <Field
            label="Никнейм (псевдоним)"
            invalid={!!errors.username}
            errorText={errors.username?.message}
            required
          >
            <Input
              {...register("username", {
                required: "Введите никнейм",
              })}
              required={null}
              placeholder="IvanIvanov"
            />
          </Field>

          <Field
            label="Почта"
            invalid={!!errors.email}
            errorText={errors.email?.message}
            required
          >
            <Input
              {...register("email", {
                required: "Введите почту",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Некорректная почта",
                },
              })}
              required={null}
              placeholder="somemail@email.com"
            />
          </Field>

          <Field
            label="Пароль"
            invalid={!!errors.password}
            errorText={errors.password?.message}
            helperText="Должен содержать английские буквы и цифры. Длина 6–16 символов"
            required
          >
            <PasswordInput
              {...register("password", {
                required: "Введите пароль",
              })}
              required={null}
            />
          </Field>

          <Field
            label="Повторите пароль"
            invalid={!!errors.passwordRepeated}
            errorText={errors.passwordRepeated?.message}
            required
          >
            <PasswordInput
              {...register("passwordRepeated", {
                required: "Повторите пароль",
              })}
              required={null}
            />
          </Field>

          <Field
            my="1"
            invalid={!!errors.termsAgree}
            errorText={errors.termsAgree?.message}
          >
            <Checkbox
              {...register("termsAgree", {
                required: "Вы должны согласиться с условиями",
              })}
            >
              Нажимая "Зарегистрироваться", я принимаю условия 
              <ChakraLink asChild>
                <NextLink href="/terms">пользовательского соглашения</NextLink>
              </ChakraLink>
            </Checkbox>
          </Field>
        </Fieldset.Content>

        <Stack gap="4">
          <Button type="submit" disabled={!isValid}>
            Зарегистрироваться
          </Button>

          <Button variant="outline" asChild>
            <NextLink href="/login">Уже есть аккаунт</NextLink>
          </Button>
        </Stack>

        <Fieldset.ErrorText alignSelf="center" mt="10">
          {errors.root?.message}
        </Fieldset.ErrorText>
      </Fieldset.Root>
    </Box>
  );
}
