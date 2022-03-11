import { Box, Container, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Logo from "../../ui/static/Logo";
import ThemeButton from "../../ui/structure/theme-button";
import MenuMobile from "../../components/header/MenuMobile";

import { LINKS_NAV } from "./constants";
import LinkItem from "./LinkItem";

interface Props {
  path: string;
}

const Navbar: React.FC<Props> = ({ path }) => {
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
        maxW="container.md"
        pos="relative"
      >
        <Box alignItems="center" display="flex" gap={12}>
          <Logo size={16} />
          <Stack
            align="center"
            color="paragraph"
            direction="row"
            display={{ base: "none", md: "flex" }}
            justify="center"
            spacing={3}
            wrap="wrap"
          >
            {LINKS_NAV.map(({ href, text }) => {
              return (
                <LinkItem
                  key={href}
                  font={{ weight: 400, size: 15 }}
                  href={href}
                  path={path}
                >
                  {text}
                </LinkItem>
              );
            })}
          </Stack>
        </Box>
        <Stack alignItems="center" direction="row" spacing={5}>
          <ThemeButton size={24} />
          <MenuMobile path={path} />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
