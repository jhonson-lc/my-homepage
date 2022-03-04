import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

type LayoutProps = {
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  const BoxM = motion(Box);

  return (
    <BoxM
      initial="hidden"
      animate="enter"
      exit="exit"
      pos="relative"
      variants={variants}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <>
        <Head>
          <title>{title} - Jhon Lescano</title>
          <meta name="twitter:title" content={title} />
          <meta property="og:title" content={title} />
        </Head>
        {children}
      </>
    </BoxM>
  );
};

export default Layout;
