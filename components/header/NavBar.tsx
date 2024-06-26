import { Box, Container, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

import Logo from "../../ui/static/Logo";
import ThemeButton from "../../ui/structure/theme-button";
import MenuMobile from "../../components/header/MenuMobile";

import { LINKS_NAV } from "./constants";
import LinkItem from "./LinkItem";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <Box
      as={motion.nav}
      css={{ backdropFilter: "blur(20px)" }}
      position="relative"
      top="0"
      width="100%"
      zIndex="1"
    >
      <Container
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        maxW="container.xl"
        pos="relative"
      >
        <Logo size={22} />
        <Stack
          align="center"
          color="paragraph"
          direction="row"
          display={{ base: "none", lg: "flex" }}
          justify="center"
          spacing={8}
          wrap="wrap"
        >
          {LINKS_NAV.map(({ href, text }) => {
            return (
              <LinkItem
                key={href}
                external={text === "Source" && true}
                font={{ weight: 400, size: 15 }}
                href={href}
                path={pathname}
              >
                {text}
              </LinkItem>
            );
          })}
        </Stack>
        <Stack alignItems="center" direction="row" spacing={5}>
          <Box display={{ base: "none", lg: "flex" }}>
            <ThemeButton size={24} />
          </Box>
          <MenuMobile path={pathname} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
