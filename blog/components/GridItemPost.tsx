import React from "react";
import {motion} from "framer-motion";
import NextLink from "next/link";
import formatDate from "utils/formatDate";
import convertBlogURL from "utils/convertBlogURL";
import {Image, Text, Stack, Box, LinkOverlay, LinkBox} from "@chakra-ui/react";

import P from "../../work/components/Paragraph";

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

const ItemPost: React.FC<Props | any> = ({blog}) => {
  const LinkBoxM = motion(LinkBox);

  return (
    <LinkBoxM
      as="article"
      borderRadius="lg"
      borderWidth="1px"
      rounded="md"
      shadow="md"
      whileHover={{scale: 0.99}}
    >
      <Stack>
        {blog.properties.image.files[0]?.file.url && (
          <Image
            borderBottomRadius="none"
            h={140}
            objectFit="cover"
            rounded="lg"
            src={blog.properties.image.files[0]?.file.url}
            w="100%"
          />
        )}
      </Stack>
      <Stack
        borderTopRadius="none"
        direction="column"
        h="100%"
        maxH={170}
        p={5}
        pos="relative"
        rounded="lg"
      >
        <Box
          as="time"
          color="primary"
          fontSize="sm"
          position="absolute"
          right="5"
          top="2"
        >
          {formatDate(blog?.properties.createdAt.created_time)}
        </Box>
        <NextLink
          passHref
          href={`/blog/${convertBlogURL(
            blog?.properties.name.title[0]?.plain_text,
          )}`}
        >
          <LinkOverlay
            color="heading"
            fontSize="xl"
            fontWeight="500"
            lineHeight={5}
          >
            {blog?.properties.name.title[0]?.plain_text}
          </LinkOverlay>
        </NextLink>
        <Stack>
          <P limitLines={3}>
            {blog?.properties.description.rich_text[0]?.plain_text}
          </P>
          <Text color="secondary" variant="information">
            Leer más ...
          </Text>
        </Stack>
      </Stack>
    </LinkBoxM>
  );
};

export default ItemPost;
