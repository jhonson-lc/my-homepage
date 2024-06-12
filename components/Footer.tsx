import { Container, Stack, Text, Divider } from "@chakra-ui/react";

import LinkItem from "./header/LinkItem";
import ListOfSocial from "./header/ListOfSocial";
import { LINKS_NAV } from "./header/constants";

export default function Footer() {
  return (
    <Stack
      alignItems="center"
      as={Container}
      color="secondary"
      divider={<Divider bg="gray" />}
      maxW="container.md"
      my={10}
    >
      <Stack alignItems="center">
        <Stack
          align="center"
          color="paragraph"
          direction="row"
          justify="center"
          spacing={8}
          wrap="wrap"
        >
          {LINKS_NAV.map(({ href, text }) => {
            return (
              <LinkItem
                key={href}
                external={text === "Source" && true}
                font={{ weight: 400, size: 15 }}
                href={href}
              >
                {text}
              </LinkItem>
            );
          })}
        </Stack>
      </Stack>
      <Stack
        alignItems="center"
        direction={{ base: "column", md: "row" }}
        justify={{ base: "center", md: "space-between" }}
        py={2}
        spacing={4}
        w="100%"
      >
        <Text color="paragraph">© 2020 Jhon Lescano. All rights reserved</Text>
        <ListOfSocial />
      </Stack>
    </Stack>
  );
}
