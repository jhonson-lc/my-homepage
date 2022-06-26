import {
  Heading,
  HeadingProps,
  ListItem,
  OrderedList,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

const components = {
  h1: (props: HeadingProps) => <Heading color="secondary" py={6} {...props} />,
  h2: (props: HeadingProps) => (
    <Heading color="secondary" fontSize={24} py={6} {...props} />
  ),
  p: ({ children }) => (
    <Text align="justify" color="paragraph" fontSize={16} fontWeight={300}>
      {children}
    </Text>
  ),

  ul: ({ children }) => <UnorderedList p={4}>{children}</UnorderedList>,
  ol: ({ children }) => <OrderedList p={4}>{children}</OrderedList>,
  li: ({ children }) => (
    <ListItem color="secondary" fontSize={16} fontWeight={400}>
      {children}
    </ListItem>
  ),
  blockquote: ({ children }) => (
    <Stack
      as="blockquote"
      borderColor="gray.200"
      borderLeft="4px solid"
      fontSize={16}
      fontWeight={400}
      p={2}
    >
      {children}
    </Stack>
  ),
};

export default components;
