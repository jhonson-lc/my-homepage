import { Icon, Text, Stack, Box, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

interface Props {
  text: string;
  href: string;
  direction?: any;
  arrow?: boolean;
}

const ArrowMore: React.FC<Props> = ({
  text,
  href,
  arrow,
  direction = "column",
}) => {
  const Circle = motion(Box);
  const IconM = motion(Icon);
  const c = useColorModeValue("black", "white");
  return (
    <NextLink passHref href={href}>
      <Stack
        alignItems="center"
        flexDirection={direction}
        gap={6}
        transition="all 0.2s ease-in-out"
      >
        <Text>{text}</Text>
        <Circle whileHover={{ scale: 1.1 }}>
          <IconM
            _hover={{ outline: `3px solid ${c}` }}
            as={BsArrowDown}
            cursor="pointer"
            h={16}
            outlineColor="secondary"
            p={2}
            rounded="full"
            transform={arrow && "rotate(-90deg)"}
            w={16}
          />
        </Circle>
      </Stack>
    </NextLink>
  );
};

export default ArrowMore;
