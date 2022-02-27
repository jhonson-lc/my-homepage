import { Stack, Heading } from '@chakra-ui/react';

interface Post {
  title?: string;
  desc?: string;
}

const BioSection: React.FC<Post> = ({ title, children }) => {
  return (
    <Stack mt={5} spacing={4} direction="column">
      <Heading variant="title-section" color="heading">
        {title}
      </Heading>
      <Stack w="100%" spacing={7} align="flex-start">
        {children}
      </Stack>
    </Stack>
  );
};

export default BioSection;
