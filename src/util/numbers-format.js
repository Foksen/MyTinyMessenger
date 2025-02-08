export function formatUnreadCount(unreadCount) {
  if (unreadCount < 1) {
    return null;
  }
  if (unreadCount > 99) {
    return "99";
  }
  return unreadCount;
}
