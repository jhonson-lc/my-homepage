import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Text, Link, Badge, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

export const TitleNavigation = ({ title }: { title: string }) => {
  return (
    <Flex alignItems="center" gap={1} mb={8} w="100%">
      <NextLink passHref href="/work">
        <Link _hover={{ textDecoration: "underline" }} color="secondary">
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
    <Flex alignItems="center" gap={2} justifyContent="flex-start" wrap="wrap">
      <Badge colorScheme={useColorModeValue("teal", "cyan")} fontSize="sm">
        {title}:{" "}
      </Badge>
      {children}
    </Flex>
  );
};

export const BuildWork = ({ build }: { build: string[] }) => {
  return (
    <>
      {build.map((item) => {
        const c = colors
          .filter(({ stack }) => stack === item)
          .map((item) => item.color);

        return (
          <Badge
            key={item}
            borderRadius="none"
            colorScheme={c[0]}
            fontSize={9}
            variant="outline"
          >
            {item}
          </Badge>
        );
      })}
    </>
  );
};

const colors: ColorBadge[] = [
  { stack: "html", color: "red" },
  { stack: "css", color: "blue" },
  { stack: "vanilla js", color: "yellow" },
  { stack: "javascript", color: "yellow" },
  { stack: "react.js", color: "linkedin" },
  { stack: "wouter", color: "green" },
  { stack: "framer-motion", color: "cyan" },
  { stack: "typescript", color: "linkedin" },
  { stack: "next.js", color: "gray" },
  { stack: "chakra-ui", color: "teal" },
  { stack: "dark mode", color: "purple" },
  { stack: "tailwindcss", color: "teal" },
  { stack: "styled-components", color: "pink" },
];

type Parameter = {
  title: string;
  children: any;
};

type ColorBadge = {
  stack: string;
  color: string;
};
