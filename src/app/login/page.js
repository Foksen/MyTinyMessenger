import { Float, Flex } from "@chakra-ui/react";
import { LoginContainer } from "@/containers/auth/login-container";
import { HeaderSimple } from "@/components/common/header/header-simple";
import { FooterSimple } from "@/components/common/footer/footer-simple";

export default function LoginPage() {
  return (
    <Flex
      minH="lvh"
      direction="column"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <HeaderSimple />
      <Float placement="middle-center" w="full" as="main">
        <LoginContainer maxW="md" flexGrow="1" mx="10" mb="10" />
      </Float>
      <FooterSimple />
    </Flex>
  );
}
