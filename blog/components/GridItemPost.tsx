import { motion } from "framer-motion";
import NextLink from "next/link";
import P from "../../work/components/Paragraph";
import formatDate from "utils/formatDate";
import convertBlogURL from "utils/convertBlogURL";

import {
  Image,
  Text,
  Stack,
  Box,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";

interface Props {
  blog: {
    id: string;
    properties: {
      createdAt: any;
      description: any;
      name: any;
      tags: any;
      image: any;
    };
  };
}

const ItemPost: React.FC<Props | any> = ({ blog }) => {
  const LinkBoxM = motion(LinkBox);
  return (
    <LinkBoxM
      whileHover={{ scale: 0.99 }}
      as="article"
      shadow="md"
      rounded="md"
      borderWidth="1px"
      borderRadius="lg"
    >
      <Stack>
        {blog.properties.image.files[0]?.file.url && (
          <Image
            w="100%"
            h={140}
            objectFit="cover"
            rounded="lg"
            loading="lazy"
            borderBottomRadius="none"
            src={blog.properties.image.files[0]?.file.url}
          />
        )}
      </Stack>
      <Stack
        rounded="lg"
        borderTopRadius="none"
        p={5}
        maxH={170}
        h="100%"
        direction="column"
        pos="relative"
      >
        <Box
          top="2"
          right="5"
          as="time"
          fontSize="sm"
          color="primary"
          position="absolute"
        >
          {formatDate(blog?.properties.createdAt.created_time)}
        </Box>
        <NextLink
          href={`/blog/${convertBlogURL(
            blog?.properties.name.title[0]?.plain_text
          )}`}
          passHref
        >
          <LinkOverlay
            color="heading"
            fontWeight="500"
            lineHeight={5}
            fontSize="xl"
          >
            {blog?.properties.name.title[0]?.plain_text}
          </LinkOverlay>
        </NextLink>
        <Stack>
          <P limitLines={3}>
            {blog?.properties.description.rich_text[0]?.plain_text}
          </P>
          <Text variant="information" color="secondary">
            Leer más ...
          </Text>
        </Stack>
      </Stack>
    </LinkBoxM>
  );
};

export default ItemPost;
