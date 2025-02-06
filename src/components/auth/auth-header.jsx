import { Center, Image } from "@chakra-ui/react";
import NextImage from "next/image";

export function AuthHeader() {
  return (
    <Center w="full" h="16" as="header" borderBottomWidth="thin" bgColor="bg">
      <Image asChild>
        <NextImage src="logo.svg" alt="mtm-logo" width="60" height="20" />
      </Image>
    </Center>
  );
}
