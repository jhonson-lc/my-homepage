import React from "react";
import NextLink from "next/link";
import {
  Box,
  Heading,
  Grid,
  Text,
  Stack,
  Divider,
  Button,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const NotFound: React.FC = () => {
  return (
    <Stack as={Grid} h="58vh" justifyContent="center" placeItems="center">
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Box my={6}>
        <NextLink href="/">
          <Button rightIcon={<ExternalLinkIcon />} variant="external">
            Return to home
          </Button>
        </NextLink>
      </Box>
    </Stack>
  );
};

export default NotFound;
