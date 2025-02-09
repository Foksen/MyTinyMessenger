import { Center, Icon, Avatar, Text, Button } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { IconLogo } from "../../../../public/icons/icon-logo";
import { getColorPalette, getStatusColor } from "@/util/color-palette";
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuTrigger,
  MenuSeparator,
} from "@/components/ui/menu";
import { FaCircle } from "react-icons/fa";
import { FaMask } from "react-icons/fa6";

function ProfileButton({ profileName, profileStatus }) {
  const colorPalette = getColorPalette(profileName);
  const statusColor = getStatusColor(profileStatus);
  return (
    <Button
      py="6"
      pl="2"
      pr="3"
      colorPalette="gray"
      gap="3"
      variant="ghost"
      outline="none"
    >
      <Avatar.Root
        colorPalette={colorPalette}
        size="sm"
        outlineWidth="2px"
        outlineStyle="solid"
        outlineColor={statusColor}
      >
        <Avatar.Fallback name={profileName} />
      </Avatar.Root>

      {profileName ? (
        <Text fontWeight="medium" size="2xl">
          {profileName}
        </Text>
      ) : null}
    </Button>
  );
}

function ProfileMenu({ profileName, profileStatus }) {
  return (
    <MenuRoot positioning={{ placement: "top-end", gutter: 6 }}>
      <MenuTrigger asChild>
        <ProfileButton
          profileName={profileName}
          profileStatus={profileStatus}
        />
      </MenuTrigger>

      <MenuContent>
        <MenuItemGroup title="Статус">
          <MenuItem value="status-available">
            <Icon size="xs" color="border.success">
              <FaCircle />
            </Icon>
            Онлайн
          </MenuItem>
          <MenuItem value="status-afk">
            <Icon size="xs" color="border.warning">
              <FaCircle />
            </Icon>
            Нет на месте
          </MenuItem>
          <MenuItem value="status-busy">
            <Icon size="xs" color="border.error">
              <FaCircle />
            </Icon>
            Не беспокоить
          </MenuItem>

          <MenuItem value="status-none">
            <Icon size="xs" color="fg.muted">
              <FaMask />
            </Icon>
            Скрыть
          </MenuItem>
        </MenuItemGroup>

        <MenuSeparator />

        <MenuItem value="settings">Настройки</MenuItem>

        <MenuItem value="exit">Выход</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
}

export function HeaderMessenger({ profileName, profileStatus }) {
  return (
    <Center
      justifyContent="space-between"
      px={{ base: "6", md: "8" }}
      w="full"
      minH="16"
      borderBottomWidth="thin"
      as="header"
    >
      <Icon h="8" mb="1" color="colorPalette.500" fill="bg.inverted" asChild>
        <IconLogo />
      </Icon>

      <Center gap="2">
        <ProfileMenu profileName={profileName} profileStatus={profileStatus} />

        <ColorModeButton size="sm" colorPalette="gray" outline="none" />
      </Center>
    </Center>
  );
}
