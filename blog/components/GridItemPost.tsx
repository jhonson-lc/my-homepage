import { motion } from 'framer-motion';
import { Stack, Box, Text, LinkOverlay, LinkBox } from '@chakra-ui/react';
import { Post } from '../types';

interface Props {
  post: Post;
}

const ItemPost: React.FC<Props> = ({ post }) => {
  const LinkBoxM = motion(LinkBox);
  return (
    <LinkBoxM
      whileHover={{ scale: 0.99 }}
      _hover={{ border: '1px', borderColor: 'heading' }}
      as="article"
      borderWidth="1px"
      shadow="md"
      borderRadius="md">
      <Stack p={5} maxH={170} h="100%" direction="column">
        <Box
          top="2"
          right="5"
          as="time"
          fontSize="xs"
          color="primary"
          position="absolute"
          dateTime="2021-01-12 15:30:00 +0000 UTC">
          Hace 13 días
        </Box>
        <LinkOverlay
          color="heading"
          href={`/blog/${post.id}`}
          fontWeight="500"
          lineHeight={5}
          fontSize="xl">
          {post.title}
        </LinkOverlay>
        <Text color="paragraph" fontWeight="300" fontSize={14} noOfLines={[3, 4]}>
          {post.description}
        </Text>
      </Stack>
    </LinkBoxM>
  );
};

export default ItemPost;
