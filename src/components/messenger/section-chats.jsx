import { getColorPalette, getStatusColor } from "@/util/color-palette";
import { formatUnreadCount } from "@/util/numbers-format";
import {
  Flex,
  HStack,
  Avatar,
  Stack,
  Text,
  Circle,
  Heading,
  Button,
  Field,
  Input,
  Icon,
  Grid,
} from "@chakra-ui/react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoSearch } from "react-icons/io5";

function SearchResult({ profileName, profileStatus }) {
  const colorPalette = getColorPalette(profileName);
  const statusColor = getStatusColor(profileStatus);
  return (
    <Button
      justifyContent="start"
      px="2"
      py="0"
      h="14"
      variant="ghost"
      colorPalette="gray"
    >
      <HStack
        w="full"
        maskImage="linear-gradient(to left, transparent, black 20px)"
        gap="3"
        overflowX="hidden"
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

        <Text textStyle="md" fontWeight="medium">
          {profileName}
        </Text>
      </HStack>
    </Button>
  );
}

function ModalNewChat({ searchInput, searchResults }) {
  return (
    <DialogRoot placement="center" trapFocus={false}>
      <DialogTrigger asChild>
        <Button variant="subtle" size="sm">
          Новый чат
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Добавление чата</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <Field.Root>
            <Field.Label>Поиск</Field.Label>
            <Stack direction="row" gap="4" w="full">
              <Input />
              <Button aspectRatio="square" variant="subtle">
                <Icon>
                  <IoSearch />
                </Icon>
              </Button>
            </Stack>
          </Field.Root>

          <Stack mt="6" gap="4">
            <Text fontWeight="medium">Найденные чаты</Text>

            <Grid templateColumns="repeat(2, 1fr)" gapX="4" gapY="3">
              <SearchResult profileName="Igor Zholobov" />
              <SearchResult profileName="Игорь Жолобов" />
              <SearchResult profileName="Константин Константинопольский" />
              <SearchResult profileName="Борис Борисов" />
              <SearchResult profileName="Harry Kane" />
            </Grid>
          </Stack>
        </DialogBody>
        <DialogCloseTrigger colorPalette="gray" />
      </DialogContent>
    </DialogRoot>
  );
}

function Chat({ chatPreview }) {
  const colorPalette = getColorPalette(chatPreview.profileName);
  const statusColor = getStatusColor(chatPreview.profileStatus);
  const unreadCount = formatUnreadCount(chatPreview.unread);
  return (
    <HStack
      position="relative"
      minH="16"
      px="4"
      gap="4"
      borderBottomWidth="thin"
      cursor="pointer"
      transition="backgrounds"
      _hover={{ backgroundColor: "bg.muted" }}
    >
      <Avatar.Root
        colorPalette={colorPalette}
        size="sm"
        outlineWidth="2px"
        outlineStyle="solid"
        outlineColor={statusColor}
      >
        <Avatar.Fallback name={chatPreview.profileName} />
      </Avatar.Root>

      <Stack
        gap="0"
        whiteSpace="nowrap"
        overflow="hidden"
        maskImage="linear-gradient(to left, transparent, black 40px)"
        w="full"
      >
        <Text textStyle="md" fontWeight="medium">
          {chatPreview.profileName}
        </Text>

        <Text textStyle="sm">{chatPreview.lastMessage}</Text>
      </Stack>

      <Flex h="full" py="2" direction="column" alignItems="end" w="16">
        <Text textStyle="xs">{chatPreview.lastMessageTime}</Text>
        {unreadCount && (
          <Circle
            size="6"
            mt="auto"
            bg="colorPalette.500"
            textStyle="xs"
            color="white"
          >
            {unreadCount}
          </Circle>
        )}
      </Flex>
    </HStack>
  );
}

export function SectionChats({ chatPreviews }) {
  return (
    <Flex
      direction="column"
      as="section"
      minW="80"
      borderRightWidth="thin"
      overflowY="auto"
    >
      <HStack
        px="4"
        py="3"
        justifyContent="space-between"
        borderBottomWidth="thin"
      >
        <Heading>Ваши чаты</Heading>
        <ModalNewChat />
      </HStack>
      {Array.from(chatPreviews).map((chatPreview, index) => (
        <Chat chatPreview={chatPreview} key={index} />
      ))}
    </Flex>
  );
}
