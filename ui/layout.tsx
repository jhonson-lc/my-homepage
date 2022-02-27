import React from 'react';
import Head from 'next/head';
import { Box, Container } from '@chakra-ui/react';
import NavBar from './navbar';
import Footer from './footer';

type Props = {
  router?: any;
};

const Layout: React.FC<Props> = ({ children, router }) => {
  return (
    <Box as="main" pt={10}>
      <Head>
        <title>Jhon Lescano - Homepage</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
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
