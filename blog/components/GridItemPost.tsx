import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import formatDate from "utils/formatDate";
import {
  Stack,
  Button,
  Box,
  LinkOverlay,
  LinkBox,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
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
  const LinkBoxM = motion(LinkBox);
  const ButtonM = motion(Button);
  const h = useBreakpointValue({ base: 1, lg: 0 });
  const [hover, setHover] = React.useState<boolean>(false);

  return (
    <Stack pos="relative">
      <LinkBoxM
        as="article"
        rounded="20px"
        onHoverEnd={() => setHover(false)}
        onHoverStart={() => setHover(true)}
      >
        <Link href={`/blog/${post.slug}`}>
          <WrapperImage hover={hover}>
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
        </Link>
        <Stack direction="column" p={4} pos="relative">
          <Box as="time" color="paragraph" fontSize={24} fontWeight={600}>
            {formatDate(post.date)}
          </Box>
          <NextLink passHref href={`/blog/${post.slug}`}>
            <LinkOverlay
              color="heading"
              fontSize={30}
              fontWeight="600"
              lineHeight={10}
            >
              {post.title}
            </LinkOverlay>
          </NextLink>
          <Stack display={{ base: "none", md: "block" }}>
            <P limitLines={1} line={1.5} size={20}>
              {post.abstract}
            </P>
          </Stack>
        </Stack>
      </LinkBoxM>
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
        />
      </AnimatePresence>
    </Stack>
  );
};

export default ItemPost;
