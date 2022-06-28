import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import formatDate from "utils/formatDate";
import {
  Text,
  Stack,
  Button,
  Box,
  LinkOverlay,
  LinkBox,
  useBreakpointValue,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Clipboard from "components/Clipboard";
import { WrapperImage } from "blog/styles/styles";
import { Post } from "blog/types";
import { urlForImage } from "lib/sanity";

import P from "../../work/components/Paragraph";

interface Props {
  post: Post;
}

const ItemPost: React.FC<Props> = ({ post }) => {
  const ButtonM = motion(Button);
  const h = useBreakpointValue({ base: 1, lg: 0 });
  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <LinkBox
      alignItems="space-between"
      as={Stack}
      direction="column"
      justifyContent="space-between"
      pos="relative"
      rounded="20px"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Stack direction="column" gap={2}>
        <Box
          ring={hover ? "2px" : "0px"}
          ringColor="red"
          ringOffset={hover ? "2px" : "0px"}
          ringOffsetColor="background"
          rounded="20px"
          transition="all 0.2s ease-in-out"
        >
          <WrapperImage>
            <Image
              alt={post.title}
              id="blog-image"
              layout="fill"
              objectFit="cover"
              priority={true}
              quality={100}
              src={urlForImage(post.coverImage).url()}
            />
          </WrapperImage>
        </Box>
        <NextLink passHref href={`/blog/${post.slug}`}>
          <LinkOverlay
            color="heading"
            fontSize={24}
            fontWeight="500"
            lineHeight={8}
          >
            {post.title}
          </LinkOverlay>
        </NextLink>
      </Stack>
      <Stack direction="column" gap={2} mt={6}>
        <Stack display={{ base: "none", md: "block" }}>
          <P limitLines={2} line={1.5} size={16} weight={200}>
            {post.abstract}
          </P>
        </Stack>
        <Stack direction="row">
          <Avatar size="md" src={urlForImage(post.author.image).url()} />
          <VStack align="start" spacing={0}>
            <Text fontWeight={400}>{post.author.name}</Text>
            <Box as="time" color="primary" fontSize={12} fontWeight={300}>
              {formatDate(post.date)}
              {` • `}
              {post.readingTime}
            </Box>
          </VStack>
        </Stack>
        <AnimatePresence>
          <Clipboard
            animate={{ opacity: hover ? 1 : h }}
            as={ButtonM}
            exit={{ opacity: 0.99 }}
            initial={{ opacity: 0.99 }}
            left={5}
            position="absolute"
            text={`https://mejhon.dev/blog/${post.slug}`}
            top={5}
            transition={{ duration: 0.01 }}
            whileHover={{ opacity: 1 }}
            onMouseEnter={() => setHover(false)}
            onMouseLeave={() => setHover(true)}
          />
        </AnimatePresence>
      </Stack>
    </LinkBox>
  );
};

export default ItemPost;
