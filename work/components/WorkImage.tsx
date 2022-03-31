import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";

import { Work } from "../types";

interface Props {
  work: Work;
}
const Wrapper = styled.div`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  height: 175px;
  transition: transform 0.3s, -webkit-transform 0.3s;
  width: "350px";
  border-radius: 20px;

  img#work-image {
    cursor: pointer;
    border-radius: 20px;
  }
  :hover {
    transform: scale(1.04);
  }
`;
const WorkImage: React.FC<Props> = ({ work }) => {
  return (
    <Stack alignItems="end" direction="row" h="100%" justifyContent="center">
      <NextLink passHref href={`/work/${work.id}`}>
        <Wrapper>
          <Image
            alt={work.title}
            height={225}
            id="work-image"
            objectFit="cover"
            src={`${work.thumbnail}`}
            width={350}
          />
        </Wrapper>
      </NextLink>
    </Stack>
  );
};

export default WorkImage;
