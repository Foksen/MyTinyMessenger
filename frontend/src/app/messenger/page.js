import { Flex } from "@chakra-ui/react";
import { HeaderMessenger } from "@/components/common/header/header-messenger";
import { MessengerContainer } from "@/containers/messenger/messenger-container";
import { FooterSimple } from "@/components/common/footer/footer-simple";

export default function ChatPage() {
  return (
    <Flex direction="column" h="lvh">
      <HeaderMessenger profileName="Игорь Жолобов" profileStatus="available" />
      <MessengerContainer />
    </Flex>
  );
}
