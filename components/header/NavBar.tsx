import {
  Avatar,
  Box,
  Container,
  Stack,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Button from "components/Button";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { GoSignIn } from "react-icons/go";

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
                external={text === "View Source" && true}
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
            <ThemeButton size={26} />
          </Box>
          <MenuMobile path={pathname} />
          {!session ? (
            <Box display={{ base: "none", md: "flex" }}>
              <Button
                bg="transparent"
                color="secondary"
                href="/auth/signin"
                text="Join me"
              />
            </Box>
          ) : (
            <Menu isLazy>
              <MenuButton>
                <HStack cursor="pointer">
                  <Avatar src={session.user.image} />
                  <Box>
                    {session.user.name.substring(
                      0,
                      session.user.name.indexOf(" "),
                    )}
                  </Box>
                </HStack>
              </MenuButton>
              <MenuList bg="hover">
                <MenuItem icon={<GoSignIn />} onClick={() => signOut()}>
                  Cerrar Sesión
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
