import {
  Box,
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Fieldset,
  Input,
  Center,
} from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";

export default function Login() {
  return (
    <Center minH="lvh">
      <Box maxW="md" flexGrow="1" mx="10" mb="10">
        <VStack mb="10">
          <Heading size="3xl">Давно не виделись!</Heading>
          <Text>Войдите чтобы продолжить общение</Text>
        </VStack>

        <Fieldset.Root size="lg">
          <Fieldset.Content>
            <Field label="Никнейм или почта">
              <Input name="name" />
            </Field>

            <Field label="Пароль">
              <PasswordInput name="password" />
            </Field>
          </Fieldset.Content>

          <Stack gap="4">
            <Button type="submit">Войти</Button>

            <Button variant="outline" asChild>
              <a href="/register">Регистрация</a>
            </Button>
          </Stack>
        </Fieldset.Root>
      </Box>
    </Center>
  );
}
