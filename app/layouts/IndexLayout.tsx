import React from "react";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import NavBar from "../../components/header/NavBar";
import Footer from "../../components/Footer";

type Props = {
  router?: any;
};

const Layout: React.FC<Props> = ({ children, router }) => {
  return (
    <Box as="main" pt={10}>
      <Head>
        <title>Jhon Lescano - Homepage</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.sm" pt={38}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
