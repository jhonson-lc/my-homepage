import { Box, Container, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Button from "components/Button";

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
      p={2}
      position="sticky"
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
        <Logo size={20} />
        <Stack
          align="center"
          color="paragraph"
          direction="row"
          display={{ base: "none", lg: "flex" }}
          justify="center"
          spacing={16}
          wrap="wrap"
        >
          {LINKS_NAV.map(({ href, text }) => {
            return (
              <LinkItem
                key={href}
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
          <Box display={{ base: "none", md: "flex" }}>
            <ThemeButton size={24} />
          </Box>
          <Box display={{ base: "none", md: "flex" }}>
            <Button
              bg="transparent"
              color="secondary"
              href="/login"
              text="Join me"
            />
          </Box>
          <MenuMobile path={pathname} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
