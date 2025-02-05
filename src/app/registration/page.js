import { Float, Flex } from "@chakra-ui/react";
import { AuthHeader } from "@/components/auth/auth-header";
import { AuthFooter } from "@/components/auth/auth-footer";
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
      <AuthHeader />
      <Float placement="middle-center" w="full" as="main">
        <RegistrationContainer maxW="md" flexGrow="1" mx="10" mb="5" />
      </Float>
      <AuthFooter />
    </Flex>
  );
}
