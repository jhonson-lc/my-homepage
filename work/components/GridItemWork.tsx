import React from "react";
import { Text, Stack, Link, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ExternalLinkIcon, ViewIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import { Work } from "../types";

import { ParameterWork, BuildWork } from "./Work";
import WorkImage from "./WorkImage";

interface Props {
  work: Work;
  i?: any;
}

const variants = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const ItemWork: React.FC<Props> = ({ work, i }) => {
  const StackM = motion(Stack);

  return (
    <StackM
      animate="enter"
      as="article"
      direction="column"
      exit="exit"
      initial="initial"
      justifyContent="flex-start"
      spacing={3}
      transition={{ duration: 0.5, delay: i * 0.3 }}
      variants={variants}
      w="100%"
    >
      <ParameterWork title="Project">
        <Text variant="information">{work.title}</Text>
        <HStack pos="absolute" right="0">
          <NextLink href={`/work/${work.id}`}>
            <ViewIcon cursor="pointer" />
          </NextLink>
          <Link isExternal href={work.siteurl}>
            <ExternalLinkIcon cursor="pointer" />
          </Link>
        </HStack>
      </ParameterWork>
      {work.build && (
        <ParameterWork title="Built with">
          {<BuildWork build={work.build} />}
        </ParameterWork>
      )}
      <WorkImage work={work} />
    </StackM>
  );
};

export default ItemWork;
