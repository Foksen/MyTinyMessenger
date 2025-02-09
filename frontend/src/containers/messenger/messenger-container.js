import { MessengerLayout } from "@/components/messenger/messenger-layout";

const CHAT_PREVIEWS = [
  {
    profileName: "Igor Zholobov",
    profileStatus: "available",
    lastMessage: "Test test test test test test test test test",
    lastMessageTime: "00:00",
    unread: 0,
  },

  {
    profileName: "Mathieu Bal",
    profileStatus: "available",
    lastMessage: "Тест тест тест",
    lastMessageTime: "99 дек",
    unread: 102,
  },

  {
    profileName: "Константин Константинопольский",
    profileStatus: "afk",
    lastMessage: "Йоооу!",
    lastMessageTime: "00:00",
    unread: 2,
  },

  {
    profileName: "Иван Иванов",
    profileStatus: null,
    lastMessage: "Привет!",
    lastMessageTime: "00:00",
    unread: 0,
  },

  {
    profileName: "SomeUser",
    profileStatus: "busy",
    lastMessage: null,
    lastMessageTime: "00:00",
    unread: 1,
  },

  {
    profileName: "AnotherUser",
    profileStatus: "available",
    lastMessage: "Test test test test test test test test test",
    lastMessageTime: "00:00",
    unread: 0,
  },
];

const DIALOG_MESSAGES = [
  {
    text: "Test",
    isSender: true,
    date: "00:00",
    isSended: true,
    isRead: true,
  },

  {
    text: "Test",
    isSender: false,
    date: "00:00",
    isSended: true,
    isRead: true,
  },

  {
    text: "Test",
    isSender: false,
    date: "00:00",
    isSended: true,
    isRead: true,
  },

  {
    text: "Test",
    isSender: true,
    date: "00:00",
    isSended: true,
    isRead: true,
  },

  {
    text: "Test",
    isSender: true,
    date: "00:00",
    isSended: true,
    isRead: true,
  },

  {
    text: "Test test test test test test test test test Test test test test test test test test test Test test test test test test test test test Test test test test test test test test test",
    isSender: false,
    date: "00:00",
    isSended: true,
    isRead: true,
  },
];

export function MessengerContainer() {
  return (
    <MessengerLayout
      chatPreviews={CHAT_PREVIEWS}
      dialogMessages={DIALOG_MESSAGES}
    />
  );
}
