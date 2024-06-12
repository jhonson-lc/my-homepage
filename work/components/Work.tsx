import { ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, Text, Link, Badge, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { colors } from "work/constants";

interface Props {
  title?: string;
  build?: string[];
  children?: React.ReactNode;
}

export const TitleNavigation: React.FC<Props> = ({ title }) => {
  return (
    <Flex alignItems="center" gap={1} mb={8} w="100%">
      <NextLink legacyBehavior href="/work">
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

export const ParameterWork: React.FC<Props> = ({ title, children }) => {
  return (
    <Flex alignItems="center" gap={2} justifyContent="flex-start" pos="relative" wrap="wrap">
      <Badge colorScheme={useColorModeValue("teal", "cyan")} fontSize="md" variant="outline">
        {title}
      </Badge>
      {": "}
      {children}
    </Flex>
  );
};

export const BuildWork: React.FC<Props> = ({ build }) => {
  return (
    <>
      {build?.map((item) => {
        const c = colors.filter(({ stack }) => stack === item).map((item) => item.color);

        return (
          <Badge key={item} borderRadius="none" colorScheme={c[0]} fontSize={12} variant="subtle">
            {item}
          </Badge>
        );
      })}
    </>
  );
};
