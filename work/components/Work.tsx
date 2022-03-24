import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Text, Link, Badge, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";
import { colors } from "work/constants";

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

export const ParameterWork: React.FC = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
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
