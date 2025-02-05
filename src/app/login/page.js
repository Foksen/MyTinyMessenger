import { Float, Flex } from "@chakra-ui/react";
import { LoginContainer } from "@/containers/auth/login-container";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthFooter } from "@/components/auth/auth-footer";

export default function LoginPage() {
  return (
    <Flex
      minH="lvh"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <AuthHeader />
      <Float placement="middle-center" w="full" as="main">
        <LoginContainer maxW="md" flexGrow="1" mx="10" mb="10" />
      </Float>
      <AuthFooter />
    </Flex>
  );
}
