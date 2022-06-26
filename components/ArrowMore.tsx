import { Text, Stack, Box, useColorModeValue } from "@chakra-ui/react";
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
  const c = useColorModeValue("black", "white");
  return (
    <NextLink passHref href={href}>
      <Stack
        alignItems="center"
        flexDirection={direction}
        gap={6}
        transition="all 0.2s ease-in-out"
      >
        <Text pt={2}>{text}</Text>
        <Circle whileHover={{ scale: 1.1 }}>
          <Circle
            _hover={{ outline: `3px solid ${c}` }}
            alignItems="center"
            cursor="pointer"
            display="flex"
            h={16}
            justifyContent="center"
            rounded="full"
            transform={arrow && "rotate(-90deg)"}
            w={16}
          >
            <Box transform="scale(2.5)">
              <BsArrowDown />
            </Box>
          </Circle>
        </Circle>
      </Stack>
    </NextLink>
  );
};

export default ArrowMore;
