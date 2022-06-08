import {
  Box,
  Button,
  Container,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";

import Logo from "../../ui/static/Logo";
import ThemeButton from "../../ui/structure/theme-button";
import MenuMobile from "../../components/header/MenuMobile";

import { LINKS_NAV, LINKS_NAV_ES } from "./constants";
import LinkItem from "./LinkItem";

const Navbar: React.FC = () => {
  const router = useRouter();
  const { locale } = router;
  const { pathname } = useRouter();

  const handleChange = (e: string) => {
    const locale = e === "es" ? "es" : "en";
    router.push("/", "/", { locale });
  };
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
            {(locale === "en" ? LINKS_NAV : LINKS_NAV_ES).map(
              ({ href, text }) => {
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
              },
            )}
          </Stack>
        </Box>
        <Stack alignItems="center" direction="row" spacing={5}>
          <ThemeButton size={24} />
          <MenuMobile path={pathname} />
        </Stack>
        <Stack position="absolute" right={0} top={-10}>
          <Menu>
            <MenuButton
              _focus={{ boxShadow: "none" }}
              as={Button}
              variant="ghost"
            >
              {locale.toUpperCase()}
              <ChevronDownIcon />
            </MenuButton>
            <MenuList
              bg="white"
              border="none"
              color="black"
              m={0}
              minW={16}
              p={0}
              w="full"
            >
              <MenuItem
                _hover={{ bg: "#00000011" }}
                onClick={() => handleChange("es")}
              >
                <Box>ES {locale === "es" && <CheckIcon />}</Box>
              </MenuItem>
              <MenuItem
                _hover={{ bg: "#00000011" }}
                onClick={() => handleChange("en")}
              >
                <Box>EN {locale === "en" && <CheckIcon />}</Box>
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
