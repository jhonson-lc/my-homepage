import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

import { META } from "../constants/config";

const variants = {
  initial: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

interface Props {
  title: string;
  url?: string;
}

const Layout: React.FC<Props> = ({ children, title, url }) => {
  const BoxM = motion(Box);

  return (
    <BoxM
      animate="enter"
      exit="exit"
      initial={false}
      pos="relative"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      variants={variants}
    >
      <>
        <Head>
          <link href={META.favicon} rel="icon" />
          <link href={META.appleicon} rel="apple-touch-icon" />
          {url && <link href={`${META.url}/${url}`} rel="canonical" />}
          <title>{`${title} | ${META.title}`}</title>
          <meta content={META.theme} name="theme-color" />
          <meta content={META.description} name="description" />
          <meta content={META.keywords} name="keywords" />
          <meta content={META.author} name="author" />
          <meta content="summary_large_image" name="twitter:card" />
          <meta content={META.twitter} name="twitter:site" />
          <meta content={META.twitter} name="twitter:creator" />
          <meta content={META.title} name="twitter:title" />
          <meta content={META.description} name="twitter:description" />
          <meta content={META.banner?.url} property="twitter:image" />
          <meta content={META.author} property="og:site_name" />
          <meta content={META.url} property="og:url" />
          <meta content="website" property="og:type" />
          <meta content={META.title} property="og:title" />
          <meta content={META.description} property="og:description" />
          <meta content={META.banner?.url} property="og:image" />
          <meta content={META.banner?.url} property="og:image:url" />
          <meta content={META.banner?.format} property="og:image:type" />
          <meta content={META.banner?.width} property="og:image:width" />
          <meta content={META.banner?.height} property="og:image:height" />
          <meta content={META.title} property="og:image:alt" />
        </Head>
        {children}
      </>
    </BoxM>
  );
};

export default Layout;
