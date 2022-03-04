import {
  Box,
  Center,
  Container,
  Divider,
  Icon,
  IconButton,
  Stack,
  useDisclosure,
  Menu,
  MenuButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "../../ui/static/Logo";
import ThemeButton from "../../ui/structure/theme-button";
import { motion } from "framer-motion";
import { LINKS_NAV } from "./constants";
import LinkItem from "./LinkItem";
import ListOfSocial from "./ListOfSocial";

function Navbar({ path }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      p={2}
      as={motion.nav}
      css={{ backdropFilter: "blur(20px)" }}
      width="100%"
      top="0"
      position="sticky"
      zIndex="1"
    >
      <Container
        display="flex"
        pos="relative"
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo size={16} />
        <Box display="flex" alignItems="center">
          <ThemeButton size={24} />
          <Menu>
            <MenuButton
              ml={5}
              display="flex"
              _hover={{ transform: "scale(1.1)" }}
              _focus={{ boxShadow: "none" }}
              as={IconButton}
              fontSize={45}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="ghost"
              onClick={() => onOpen()}
            />
            <Modal
              blockScrollOnMount={false}
              returnFocusOnClose={false}
              onClose={onClose}
              isOpen={isOpen}
              size="sm"
              motionPreset="slideInBottom"
            >
              <ModalOverlay
                bg="blackAlpha.300"
                backdropFilter="blur(2px) hue-rotate(90deg)"
              />
              <ModalContent
                borderRadius="none"
                border="2px"
                borderColor="primary"
                w="300px"
              >
                <ModalCloseButton
                  pos="absolute"
                  _focus={{ boxShadow: "none" }}
                  _hover={{
                    bg: "none",
                    fontSize: "25px",
                    transform: "scale(1.1)",
                  }}
                  color="secondary"
                  fontSize="20px"
                  top="1.5vw"
                  right="1.5vw"
                  zIndex="1"
                />
                <ModalBody spacing={6} p={14} bg="background" as={Stack}>
                  <Stack>
                    {LINKS_NAV.map(({ href, text, icon }) => {
                      return (
                        <LinkItem
                          font={{ size: 20, weight: 900 }}
                          onClose={onClose}
                          key={href}
                          href={href}
                          path={path}
                        >
                          {icon ? (
                            <Stack direction="row" align="center">
                              <span>{text}</span>
                              <Icon as={icon} />
                            </Stack>
                          ) : (
                            <span>{text}</span>
                          )}
                        </LinkItem>
                      );
                    })}
                  </Stack>
                  <Divider border="none" h="1px" bg="secondary" />
                  <ListOfSocial color="secondary" size={5} />
                  <Center>
                    <ThemeButton size={24} />
                  </Center>
                </ModalBody>
              </ModalContent>
            </Modal>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
