import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    body: "'Poppins'",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "light" ? "#fafafa" : "#161616",
      },
    }),
  },
  semanticTokens: {
    colors: {
      background: {
        default: "#ffffff",
        _dark: "#000000",
      },
      back: {
        default: "blackAlpha.50",
        _dark: "whiteAlpha.50",
      },
      primary: {
        default: "blackAlpha.900",
        _dark: "whiteAlpha.900",
      },
      experience: {
        default: "blackAlpha.800",
        _dark: "whiteAlpha.800",
      },
      hover: {
        default: "blackAlpha.50",
        _dark: "whiteAlpha.50",
      },
      secondary: {
        default: "#000000",
        _dark: "#ffffff",
      },
      heading: {
        default: "#000000",
        _dark: "#ffffff",
      },
      paragraph: {
        default: "rgba(0, 0, 0, 0.7)",
        _dark: "rgba(255, 255, 255, 0.7)",
      },
      footer: {
        default: "whiteAlpha.900",
        _dark: "blackAlpha.500",
      },
      badge: {
        default: "teal",
        _dark: "cyan",
      },
      icon: {
        default: "blackAlpha.200",
        _dark: "whiteAlpha.300",
      },
    },
  },
  components: {
    Heading: {
      variants: {
        "title-section": {
          fontSize: 48,
          marginTop: 3,
          marginBottom: 3,
        },
      },
    },
    Text: {
      variants: {
        information: {
          color: "secondary",
          fontWeight: "light",
          fontSize: "sm",
        },
        linkexternal: {
          color: "primary",
          fontWeight: "light",
          fontSize: "sm",
          textDecoration: "underline",
        },
      },
    },
    Button: {
      variants: {
        external: {
          borderRadius: "none",
          variant: "ghost",
          color: "primary",
          _hover: { textDecoration: "underline" },
        },
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: props.colorMode === "light" ? "#3d7aed" : "#bb86fc",
        _hover: { textDecoration: "none" },
      }),
    },
    Switch: {
      _focus: {
        boxShadow: "none",
      },
    },
    DrawerCloseButton: {
      _focus: { boxShadow: "none" },
      variant: "solid",
    },
  },
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});
