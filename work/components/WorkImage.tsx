import { Image, Stack } from '@chakra-ui/react';
import { Work } from '../types';
import NextLink from 'next/link';

interface Props {
  work: Work;
}

const WorkImage: React.FC<Props> = ({ work }) => {
  return (
    <Stack justifyContent="flex-end" h="100%">
      <NextLink href={`/work/${work.id}`} passHref>
        <Image
          alt={work.title}
          transition="transform .3s,-webkit-transform .3s"
          _hover={{ transform: 'scale(1.04)' }}
          cursor="pointer"
          boxShadow="md"
          w="350px"
          h="180px"
          objectFit="cover"
          borderRadius="xl"
          src={work.thumbnail}
        />
      </NextLink>
    </Stack>
  );
};

export default WorkImage;
