import { ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, Text, Link, Badge, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

export const TitleNavigation = ({ title }: { title: string }) => {
  return (
    <Flex alignItems="center" w="100%" mb={8} gap={1}>
      <NextLink href="/work" passHref>
        <Link _hover={{ textDecoration: 'underline' }} color="secondary">
          Work
        </Link>
      </NextLink>
      <ChevronRightIcon fontSize="xl" />
      <Text color="secondary" variant="outline">
        {title}
      </Text>
    </Flex>
  );
};

export const ParameterWork: React.FC<Parameter> = ({ title, children }) => {
  return (
    <Flex wrap="wrap" alignItems="center" justifyContent="flex-start" gap={2}>
      <Badge fontSize="sm" colorScheme={useColorModeValue('teal', 'cyan')}>
        {title}:{' '}
      </Badge>
      {children}
    </Flex>
  );
};

export const BuildWork = ({ build }: { build: string[] }) => {
  return (
    <>
      {build.map(item => {
        const c = colors.filter(({ stack }) => stack === item).map(item => item.color);
        return (
          <Badge key={item} fontSize={9} borderRadius="none" variant="outline" colorScheme={c[0]}>
            {item}
          </Badge>
        );
      })}
    </>
  );
};

const colors: ColorBadge[] = [
  { stack: 'html', color: 'red' },
  { stack: 'css', color: 'blue' },
  { stack: 'vanilla js', color: 'yellow' },
  { stack: 'javascript', color: 'yellow' },
  { stack: 'react.js', color: 'linkedin' },
  { stack: 'wouter', color: 'green' },
  { stack: 'framer-motion', color: 'cyan' },
  { stack: 'typescript', color: 'linkedin' },
  { stack: 'next.js', color: 'gray' },
  { stack: 'chakra-ui', color: 'teal' },
  { stack: 'dark mode', color: 'purple' },
  { stack: 'tailwindcss', color: 'teal' },
  { stack: 'styled-components', color: 'pink' },
];

type Parameter = {
  title: string;
  children: any;
};

type ColorBadge = {
  stack: string;
  color: string;
};
