import {
  Box,
  Center,
  Container,
  Divider,
  Icon,
  IconButton,
  Link,
  Stack,
  useDisclosure,
  Menu,
  MenuButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { BsGithub, BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { IconType } from 'react-icons';

import Logo from './logo';
import ThemeButton from './theme-button';

import NextLink from 'next/link';
import { motion } from 'framer-motion';
const LinkM = motion(Link);
const BoxM = motion(Box);

const SOCIAL_MEDIAS: LinkNav[] = [
  { href: 'https://www.instagram.com/jhonson.lc/?hl=es', text: 'Instagram', icon: BsInstagram },
  { href: 'https://www.facebook.com/jhon.cisneros.754/', text: 'Facebook', icon: BsFacebook },
  { href: 'https://twitter.com/jhonson_lc', text: 'Twitter', icon: BsTwitter },
  { href: 'https://www.linkedin.com/in/jhonlescano/', text: 'LinkedIn', icon: BsLinkedin },
];

export const LINKS_NAV: LinkNav[] = [
  { href: '/', text: 'Home' },
  { href: '/work', text: 'My Work' },
  { href: '/blog', text: 'My Blogs' },
  { href: '/contact', text: 'Contact' },
  { href: 'https://github.com/jhonson-lc', text: 'View Source', icon: BsGithub },
];

function Navbar({ path }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <BoxM
      p={2}
      as="nav"
      css={{ backdropFilter: 'blur(20px)' }}
      width="100%"
      top="0"
      position="sticky"
      zIndex="1">
      <Container
        display="flex"
        pos="relative"
        maxW="container.md"
        alignItems="center"
        justifyContent="space-between">
        <Logo size={16} />
        <Box display="flex" alignItems="center">
          <ThemeButton size={24} />
          <Menu>
            <MenuButton
              ml={5}
              display="flex"
              _hover={{ transform: 'scale(1.1)' }}
              _focus={{ boxShadow: 'none' }}
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
              motionPreset="slideInBottom">
              <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(2px) hue-rotate(90deg)" />
              <ModalContent borderRadius="none" border="2px" borderColor="primary" w="300px">
                <ModalCloseButton
                  pos="absolute"
                  _focus={{ boxShadow: 'none' }}
                  _hover={{ bg: 'none', fontSize: '25px', transform: 'scale(1.1)' }}
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
                          path={path}>
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
    </BoxM>
  );
}

export const LinkItem: React.FC<LinkNav> = ({ onClose, href, path, children, font }) => {
  const active: boolean = path === href;

  return (
    <NextLink href={href} passHref>
      <Link
        onClick={onClose}
        display="inline-block"
        pos="relative"
        _focus={{ boxShadow: 'none' }}
        _hover={{ textDecoration: !active ? 'underline' : '' }}
        textDecoration={active ? 'underline' : 'none'}
        color={active ? 'primary' : 'inherit'}
        fontSize={font?.size}
        fontWeight={font?.weight}>
        {children}
      </Link>
    </NextLink>
  );
};

export const ListOfSocial = ({ size, color }: { size: number; color: string }) => {
  return (
    <Stack direction="row" justify="center" spacing={5}>
      {SOCIAL_MEDIAS.map(social => {
        return (
          <NextLink key={social.text} href={social.href} passHref>
            <LinkM _focus={{ boxShadow: 'none' }} whileHover={{ scale: 1.1 }} target="_blank">
              <Icon color={color} w={size} h={size} as={social.icon} />
            </LinkM>
          </NextLink>
        );
      })}
    </Stack>
  );
};

type LinkNav = {
  href: string;
  text?: string;
  icon?: IconType;
  path?: string;
  target?: string;
  onClose?: any;
  font?: { size: any; weight: any };
};

export default Navbar;
