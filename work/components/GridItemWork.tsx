import React from 'react';
import { Text, Stack } from '@chakra-ui/react';
import { ParameterWork, BuildWork } from './Work';
import WorkImage from './WorkImage';
import { Work } from '../types';

interface Props {
  work: Work;
}

const ItemWork: React.FC<Props> = ({ work }) => {
  return (
    <Stack as="article" justifyContent="flex-start" direction="column">
      <ParameterWork title="Project">
        <Text variant="information">{work.title}</Text>
      </ParameterWork>
      {work.build && (
        <ParameterWork title="Build with">{<BuildWork build={work.build} />}</ParameterWork>
      )}
      <WorkImage work={work} />
    </Stack>
  );
};

export default ItemWork;
