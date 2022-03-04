import { Stack, Heading } from "@chakra-ui/react";

interface Post {
  title?: string;
  desc?: string;
}

const Section: React.FC<Post> = ({ title, children }) => {
  return (
    <Stack spacing={10} direction="column">
      <Heading variant="title-section" color="heading">
        {title}
      </Heading>
      <Stack w="100%" spacing={5} align="flex-start">
        {children}
      </Stack>
    </Stack>
  );
};

export default Section;
