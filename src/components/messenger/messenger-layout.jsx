import { Flex } from "@chakra-ui/react";
import { SectionChats } from "./section-chats";
import { SectionDialog } from "./section-dialog";

export function MessengerLayout({ chatPreviews, dialogMessages }) {
  return (
    <Flex as="main" direction="row" h="full" flexGrow="1">
      <SectionChats chatPreviews={chatPreviews} />
      <SectionDialog dialogMessages={dialogMessages} />
    </Flex>
  );
}
