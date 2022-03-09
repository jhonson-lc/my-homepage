import React from "react";
import { Image, Stack } from "@chakra-ui/react";
import NextLink from "next/link";

import { Work } from "../types";

interface Props {
  work: Work;
}

const WorkImage: React.FC<Props> = ({ work }) => {
  return (
    <Stack alignItems="end" direction="row" h="100%" justifyContent="center">
      <NextLink passHref href={`/work/${work.id}`}>
        <Image
          _hover={{ transform: "scale(1.04)" }}
          alt={work.title}
          borderRadius="xl"
          boxShadow="md"
          cursor="pointer"
          h="180px"
          objectFit="cover"
          src={work.thumbnail}
          transition="transform .3s,-webkit-transform .3s"
          w="350px"
        />
      </NextLink>
    </Stack>
  );
};

export default WorkImage;
