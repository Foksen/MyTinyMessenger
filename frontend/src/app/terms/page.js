import { FooterSimple } from "@/components/common/footer/footer-simple";
import { HeaderSimple } from "@/components/common/header/header-simple";
import { ContentTerms } from "@/components/content/terms";
import { Flex } from "@chakra-ui/react";

export default function TermsPage() {
  return (
    <Flex minH="lvh" direction="column" alignItems="center">
      <HeaderSimple />

      <ContentTerms gap="4" maxW="3xl" mx="8" mb="auto" />

      <FooterSimple />
    </Flex>
  );
}
