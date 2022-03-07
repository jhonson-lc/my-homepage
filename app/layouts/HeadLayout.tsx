import React from "react";
import {Box} from "@chakra-ui/react";
import {motion} from "framer-motion";
import Head from "next/head";

const variants = {
  hidden: {opacity: 0, x: 0, y: 20},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: -0, y: 20},
};

type LayoutProps = {
  title: string;
};

const Layout: React.FC<LayoutProps> = ({children, title}) => {
  const BoxM = motion(Box);

  return (
    <BoxM
      animate="enter"
      exit="exit"
      initial="hidden"
      pos="relative"
      transition={{duration: 0.4, ease: "easeInOut"}}
      variants={variants}
    >
      <>
        <Head>
          <title>{title} - Jhon Lescano</title>
          <meta content={title} name="twitter:title" />
          <meta content={title} property="og:title" />
        </Head>
        {children}
      </>
    </BoxM>
  );
};

export default Layout;
