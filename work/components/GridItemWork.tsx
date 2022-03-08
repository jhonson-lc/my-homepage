import React from "react";
import {Text, Stack} from "@chakra-ui/react";
import {motion} from "framer-motion";

import {Work} from "../types";

import {ParameterWork, BuildWork} from "./Work";
import WorkImage from "./WorkImage";

interface Props {
  work: Work;
  i?: any;
}

const variants = {
  initial: {opacity: 0, y: 50},
  enter: {opacity: 1, y: 0},
  exit: {opacity: 0, y: -50},
};

const ItemWork: React.FC<Props> = ({work, i}) => {
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
      transition={{duration: 0.5, delay: i * 0.3}}
      variants={variants}
    >
      <ParameterWork title="Proyecto">
        <Text variant="information">{work.title}</Text>
      </ParameterWork>
      {work.build && (
        <ParameterWork title="Creado con">
          {<BuildWork build={work.build} />}
        </ParameterWork>
      )}
      <WorkImage work={work} />
    </StackM>
  );
};

export default ItemWork;
