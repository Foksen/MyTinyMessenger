import { Center, Icon } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { IconLogo } from "../../../../public/icons/icon-logo";

export function HeaderSimple() {
  return (
    <Center
      justifyContent="space-between"
      mb="16"
      px={{ base: "6", md: "8" }}
      w="full"
      h="16"
      borderBottomWidth="thin"
      as="header"
    >
      <Icon h="8" mb="1" color="colorPalette.500" fill="bg.inverted" asChild>
        <IconLogo />
      </Icon>

      <ColorModeButton size="sm" colorPalette="gray" outline="none" />
    </Center>
  );
}
