import React from "react";
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react";
import { GetServerSidePropsContext } from "next";

import theme from "../../lib/theme";

interface ChakraProps {
  cookies?: string;
}

const Chakra: React.FC<ChakraProps> = ({ children, cookies }) => {
  return (
    <ChakraProvider
      colorModeManager={
        cookies ? cookieStorageManager(cookies) : localStorageManager
      }
      theme={theme}
    >
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
