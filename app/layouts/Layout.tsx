import React from "react";
import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "components/header/NavBar";
import Footer from "components/Footer";

import { META } from "../constants/config";

const Layout = ({ children, ...customMeta }) => {
  const router = useRouter();
  const meta: any = {
    ...META,
    ...customMeta,
  };
  return (
    <Box pos="relative">
      <>
        <Head>
          <link href={meta.favicon} rel="icon" />
          <link href={meta.appleicon} rel="apple-touch-icon" />
          <title>{meta.title}</title>
          <meta content="follow, index" name="robots" />
          <meta content={meta.description} name="description" />
          <meta content={`${meta.url}${router.asPath}`} property="og:url" />
          <link href={`${meta.url}${router.asPath}`} rel="canonical" />
          <meta content={meta.keywords} name="keywords" />
          <meta content={meta.author} name="author" />
          <meta content={meta.type} property="og:type" />
          <meta content={meta.author} property="og:site_name" />
          <meta content={meta.title} property="og:title" />
          <meta content={meta.description} property="og:description" />
          <meta content={meta.image} property="og:image" />
          <meta content={meta.title} property="og:image:alt" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content={meta.twitter} name="twitter:site" />
          <meta content={meta.twitter} name="twitter:creator" />
          <meta content={meta.title} name="twitter:title" />
          <meta content={meta.description} name="twitter:description" />
          <meta content={meta.image} property="twitter:image" />
          {meta.date && (
            <meta content={meta.date} property="article:published_time" />
          )}
        </Head>
        <Box as="main" pt={10}>
          <NavBar />
          <Container maxW="container.lg" pt={20}>
            {children}
          </Container>
          <Footer />
        </Box>
      </>
    </Box>
  );
};

export default Layout;
