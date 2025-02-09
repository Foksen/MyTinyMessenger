import { Button, Flex, Stack, Textarea } from "@chakra-ui/react";
import { FiSend } from "react-icons/fi";

function DialogMessage({ dialogMessage }) {
  return (
    <Flex
      w="fit"
      px="4"
      py="3"
      alignSelf={dialogMessage.isSender ? "start" : "end"}
      ml={!dialogMessage.isSender && "10"}
      mr={dialogMessage.isSender && "10"}
      textStyle="md"
      _light={{ color: dialogMessage.isSender ? null : "white" }}
      _dark={{ color: "white" }}
      bgColor={dialogMessage.isSender ? "bg" : "colorPalette.500"}
      rounded="xl"
      borderWidth="thin"
    >
      {dialogMessage.text}
    </Flex>
  );
}

function InputRow() {
  return (
    <Flex gap="4">
      {/* <Textarea
        bgColor="bg"
        autoresize
        colorPalette="gray"
        outline="none"
        borderWidth="2"
        transition="all"
        fontSize="md"
        _focus={{ borderColor: "fg.subtle" }}
      /> */}

      <Textarea bgColor="bg" textStyle="md" />
      <Button aspectRatio="square" size="lg">
        <FiSend />
      </Button>
    </Flex>
  );
}

export function SectionDialog({ dialogMessages }) {
  return (
    <Flex
      direction="column"
      justifyContent="flex-end"
      gap="12"
      p="10"
      as="section"
      flexGrow="1"
      bgColor="bg.muted"
    >
      <Stack gap="6">
        {Array.from(dialogMessages).map((dialogMessage, index) => (
          <DialogMessage dialogMessage={dialogMessage} key={index} />
        ))}
      </Stack>

      <InputRow />
    </Flex>
  );
}
