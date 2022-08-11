import { Avatar, Box, Container, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Button from "components/Button";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import Logo from "../../ui/static/Logo";
import ThemeButton from "../../ui/structure/theme-button";
import MenuMobile from "../../components/header/MenuMobile";

import { LINKS_NAV } from "./constants";
import LinkItem from "./LinkItem";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();
  const { data: session, status } = useSession();

  if (session) {
    if (status === "unauthenticated") {
      return;
    }
  }

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
          <Box display={{ base: "none", lg: "block" }}>
            <Button
              bg="transparent"
              color="primary"
              href="/curriculum-vitae"
              text="CV"
              x={3}
              y={6}
            />
          </Box>
          <Box display={{ base: "block", lg: "none" }}>
            <Button
              bg="transparent"
              color="primary"
              href="https://drive.google.com/uc?id=1mcfrMQP5Vhby9i_3xnNvA8h_sTCW7N6B&export=download"
              text="CV"
              x={3}
              y={6}
            />
          </Box>
          <MenuMobile path={pathname} />
          {session && (
            <Link href="/profile">
              <Avatar
                border="1px solid white"
                cursor="pointer"
                size="md"
                src={session.user.image}
              />
            </Link>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
