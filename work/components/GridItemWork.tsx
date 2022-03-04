import React from "react";
import { Text, Stack } from "@chakra-ui/react";
import { ParameterWork, BuildWork } from "./Work";
import WorkImage from "./WorkImage";
import { Work } from "../types";

interface Props {
  work: Work;
}

const ItemWork: React.FC<Props> = ({ work }) => {
  return (
    <Stack
      spacing={3}
      as="article"
      justifyContent="flex-start"
      direction="column"
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
    </Stack>
  );
};

export default ItemWork;
