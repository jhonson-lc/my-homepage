import React from "react";
import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

import { META } from "../constants/config";
import NavBar from "../../components/header/NavBar";
import Footer from "../../components/Footer";

type Props = {
  router?: any;
};

const Layout: React.FC<Props> = ({ children, router }) => {
  return (
    <Box as="main" pt={10}>
      <Head>
        <link href="/favicon.ico" rel="icon" />
        <link href={META.appleicon} rel="apple-touch-icon" />
        <title>{`Home - ${META.title} `}</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content={META.theme} name="theme-color" />
        <meta content={META.description} name="description" />
        <meta content={META.keywords} name="keywords" />
        <meta content={META.author} name="author" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={META.twitter} name="twitter:site" />
        <meta content={META.twitter} name="twitter:creator" />
        <meta content={META.url} property="og:url" />
        <meta content="website" property="og:type" />
        <meta content={META.title} property="og:title" />
        <meta content={META.description} property="og:description" />
        <meta content={META.banner?.url} property="og:image" />
        <meta content={META.banner?.url} property="og:image:secure" />
        <meta content={META.banner?.url} property="og:image:url" />
        <meta content={META.banner?.format} property="og:image:type" />
        <meta content={META.banner?.width} property="og:image:width" />
        <meta content={META.banner?.height} property="og:image:height" />
        <meta content={META.title} property="og:image:alt" />
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.sm" pt={20}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
