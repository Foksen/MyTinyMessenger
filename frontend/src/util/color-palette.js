const COLOR_PALETTES = [
  "gray",
  "red",
  "green",
  "blue",
  "teal",
  "pink",
  "purple",
  "cyan",
  "orange",
  "yellow",
];

const COLOR_PALETTES_SIZE = COLOR_PALETTES.length;

export function getColorPalette(str) {
  if (!str) {
    return COLOR_PALETTES[0];
  }

  let i = str.charAt(0).charCodeAt(0) % COLOR_PALETTES_SIZE;
  return COLOR_PALETTES[i];
}

export function getStatusColor(str) {
  switch (str) {
    case "available":
      return "border.success";
    case "afk":
      return "border.warning";
    case "busy":
      return "border.error";
    default:
      return "transparent";
  }
}
