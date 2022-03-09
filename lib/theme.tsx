import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export default extendTheme({
  fonts: {
    body: "'Poppins'",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: mode("#fafafa", "#121212")(props),
      },
    }),
  },
  semanticTokens: {
    colors: {
      background: {
        default: "#fafafa",
        _dark: "#121212",
      },
      primary: {
        default: "#3d7aed",
        _dark: "#bb86fc",
      },
      secondary: {
        default: "#121212",
        _dark: "#fafafa",
      },
      heading: {
        default: "blackAlpha.700",
        _dark: "whiteAlpha.800",
      },
      paragraph: {
        default: "blackAlpha.800",
        _dark: "whiteAlpha.800",
      },
      footer: {
        default: "whiteAlpha.900",
        _dark: "blackAlpha.500",
      },
      badge: {
        default: "teal",
        _dark: "cyan",
      },
    },
  },
  components: {
    Heading: {
      variants: {
        "title-section": {
          textDecoration: "underline",
          fontSize: 25,
          textUnderlineOffset: 5,
          textDecorationColor: "secondary",
          textDecorationThickness: 2,
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
        color: mode("#3d7aed", "#bb86fc")(props),
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
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
