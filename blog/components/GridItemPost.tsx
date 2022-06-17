import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import NextLink from "next/link";
import formatDate from "utils/formatDate";
import convertBlogURL from "utils/convertBlogURL";
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

const ItemPost: React.FC<Props | any> = ({ blog }) => {
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
        <Link
          href={`/blog/${convertBlogURL(
            blog?.properties.name.title[0]?.plain_text,
          )}`}
        >
          <WrapperImage hover={hover}>
            <Image
              alt={blog?.properties.name.title[0]?.plain_text}
              id="blog-image"
              layout="fill"
              objectFit="cover"
              src={`/images/blogs/${blog.properties.image.rich_text[0]?.plain_text}`}
            />
          </WrapperImage>
        </Link>
        <Stack direction="column" p={4} pos="relative">
          <Box as="time" color="paragraph" fontSize={24} fontWeight={600}>
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
              fontSize={30}
              fontWeight="600"
              lineHeight={10}
            >
              {blog?.properties.name.title[0]?.plain_text}
            </LinkOverlay>
          </NextLink>
          <Stack display={{ base: "none", md: "block" }}>
            <P limitLines={1} line={1.5} size={20}>
              {blog?.properties.description.rich_text[0]?.plain_text}
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
          text={`https://mejhon.dev/blog/${convertBlogURL(
            blog?.properties.name.title[0]?.plain_text,
          )}`}
          top={5}
          transition={{ duration: 0.01 }}
          whileHover={{ opacity: 1 }}
        />
      </AnimatePresence>
    </Stack>
  );
};

export default ItemPost;
