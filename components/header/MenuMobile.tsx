import React from "react";
import {
  Center,
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

import ThemeButton from "../../ui/structure/theme-button";

import { LINKS_NAV } from "./constants";
import LinkItem from "./LinkItem";
import ListOfSocial from "./ListOfSocial";

interface Props {
  path: string;
}

const MenuMobile: React.FC<Props> = ({ path }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu>
      <MenuButton
        _focus={{ boxShadow: "none" }}
        _hover={{ transform: "scale(1.1)" }}
        aria-label="Options"
        as={IconButton}
        display={{ base: "flex", lg: "none" }}
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
            <Stack alignItems="center" direction="column">
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
            <ListOfSocial />
            <Center>
              <ThemeButton size={24} />
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Menu>
  );
};

export default MenuMobile;
