import React from "react";
import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";

import theme from "../../lib/theme";

interface ChakraProps {
  cookies?: string;
  children: React.ReactNode;
}

const Chakra: React.FC<ChakraProps> = ({ children, cookies }) => {
  const colorModeManager =
    typeof cookies === "string" ? cookieStorageManagerSSR(cookies) : localStorageManager;

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  );
};

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}

export default Chakra;
