import { Float, Flex } from "@chakra-ui/react";
import { HeaderSimple } from "@/components/common/header/header-simple";
import { FooterSimple } from "@/components/common/footer/footer-simple";
import { RegistrationContainer } from "@/containers/auth/registration-container";

export default function RegistrationPage() {
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
        <RegistrationContainer maxW="md" flexGrow="1" mx="10" mb="5" />
      </Float>
      <FooterSimple />
    </Flex>
  );
}
