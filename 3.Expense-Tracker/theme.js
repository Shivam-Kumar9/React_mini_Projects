import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#3182ce" },
        secondary: { value: "#2d3748" }
      }
    }
  }
})

export const themeSystem = createSystem(defaultConfig, config)