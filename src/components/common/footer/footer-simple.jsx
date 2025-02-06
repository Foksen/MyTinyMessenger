import { Center, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import NextLink from "next/link";

export function FooterSimple() {
  const currentYear = new Date().getFullYear();

  return (
    <Center
      w="full"
      minH={{ md: "16" }}
      px={{ base: "6", md: "8" }}
      py={{ base: "4", md: null }}
      as="footer"
      borderTopWidth="thin"
    >
      <Flex
        w="full"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        gapY="2"
      >
        <Text textStyle="sm" textAlign="center" color="fg.subtle">
          © {currentYear} MyTinyMessenger
        </Text>
        <ChakraLink
          textStyle="sm"
          textAlign="center"
          fontWeight="medium"
          asChild
        >
          <NextLink href="/terms">Пользовательское соглашение</NextLink>
        </ChakraLink>
      </Flex>
    </Center>
  );
}
