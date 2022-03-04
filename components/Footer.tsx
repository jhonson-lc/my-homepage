import { Container, Stack, Text, Divider } from "@chakra-ui/react";
import LinkItem from "./header/LinkItem";
import ListOfSocial from "./header/ListOfSocial";
import { LINKS_NAV } from "./header/constants";
import Logo from "../ui/static/Logo";

export default function Footer() {
  return (
    <Stack
      as={Container}
      maxW="container.md"
      alignItems="center"
      mt={10}
      divider={<Divider bg="gray" />}
      color="secondary"
    >
      <Stack alignItems="center">
        <Logo size={10} />
        <Stack
          direction="row"
          color="paragraph"
          align="center"
          justify="center"
          wrap="wrap"
          spacing={8}
        >
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
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
      >
        <Text color="paragraph">© 2020 Jhon Lescano. All rights reserved</Text>
        <ListOfSocial color="paragraph" size={5} />
      </Stack>
    </Stack>
  );
}
