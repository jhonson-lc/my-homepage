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
import { motion } from "framer-motion";

import Logo from "../../ui/static/Logo";
import ThemeButton from "../../ui/structure/theme-button";

import { LINKS_NAV } from "./constants";
import LinkItem from "./LinkItem";
import ListOfSocial from "./ListOfSocial";

function Navbar({ path }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <Logo size={16} />
        <Box alignItems="center" display="flex">
          <ThemeButton size={24} />
          <Menu>
            <MenuButton
              _focus={{ boxShadow: "none" }}
              _hover={{ transform: "scale(1.1)" }}
              aria-label="Options"
              as={IconButton}
              display="flex"
              fontSize={45}
              icon={<GiHamburgerMenu />}
              ml={5}
              variant="ghost"
              onClick={() => onOpen()}
            />
            <Modal
              blockScrollOnMount={false}
              isOpen={isOpen}
              motionPreset="slideInBottom"
              returnFocusOnClose={false}
              size="sm"
              onClose={onClose}
            >
              <ModalOverlay
                backdropFilter="blur(2px) hue-rotate(90deg)"
                bg="blackAlpha.300"
              />
              <ModalContent
                border="2px"
                borderColor="primary"
                borderRadius="none"
                w="300px"
              >
                <ModalCloseButton
                  _focus={{ boxShadow: "none" }}
                  _hover={{
                    bg: "none",
                    fontSize: "25px",
                    transform: "scale(1.1)",
                  }}
                  color="secondary"
                  fontSize="20px"
                  pos="absolute"
                  right="1.5vw"
                  top="1.5vw"
                  zIndex="1"
                />
                <ModalBody as={Stack} bg="background" p={14} spacing={6}>
                  <Stack>
                    {LINKS_NAV.map(({ href, text, icon }) => {
                      return (
                        <LinkItem
                          key={href}
                          font={{ size: 20, weight: 900 }}
                          href={href}
                          path={path}
                          onClose={onClose}
                        >
                          {icon ? (
                            <Stack align="center" direction="row">
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
                  <Divider bg="secondary" border="none" h="1px" />
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
