import { defaultConfig, createSystem, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "blue",
    },
  },
});

export const system = createSystem(defaultConfig, config);
