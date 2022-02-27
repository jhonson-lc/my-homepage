import { Container, Stack, Text, Divider } from '@chakra-ui/react';
import { ListOfSocial, LinkItem, LINKS_NAV } from './navbar';
import Logo from './logo';

export default function Footer() {
  return (
    <Stack
      as={Container}
      maxW="container.md"
      boxShadow="lg"
      alignItems="center"
      mt={10}
      divider={<Divider bg="gray" />}
      color="secondary">
      <Stack alignItems="center">
        <Logo size={10} />
        <Stack
          direction="row"
          color="paragraph"
          align="center"
          justify="center"
          wrap="wrap"
          spacing={8}>
          {LINKS_NAV.map(({ href, text }) => {
            return (
              <LinkItem font={{ weight: 400, size: 15 }} key={href} href={href}>
                {text}
              </LinkItem>
            );
          })}
        </Stack>
      </Stack>
      <Stack
        w="100%"
        py={2}
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}>
        <Text color="paragraph">© 2020 Jhon Lescano. All rights reserved</Text>
        <ListOfSocial color="paragraph" size={5} />
      </Stack>
    </Stack>
  );
}
