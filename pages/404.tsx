import NextLink from "next/link";
import {Box, Heading, Grid, Text, Stack, Divider, Button} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";

const NotFound = () => {
  return (
    <Stack as={Grid} placeItems="center" justifyContent="center" h="58vh">
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
