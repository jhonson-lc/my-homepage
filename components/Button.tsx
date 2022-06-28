import React from "react";
import NextLink from "next/link";
import { Button as ButtonChakra, Link } from "@chakra-ui/react";

interface Props {
  text: string;
  color?: string;
  bg?: string;
  href: string;
  icon?: any;
  x?: number;
  y?: number;
  external?: boolean;
  enabled?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  color = "background",
  bg = "primary",
  href,
  icon,
  x = 10,
  y = 8,
  external,
  enabled,
}) => {
  return (
    <NextLink passHref href={href}>
      <Link isExternal={external}>
        <ButtonChakra
          _focus={{ boxShadow: "none" }}
          _hover={{
            bg: bg,
            ring: "2px",
            borderColor: "background",
            ringColor: "red",
            ringOffset: "2px",
            ringOffsetColor: "background",
          }}
          bg={bg}
          borderWidth={2}
          color={color}
          fontSize={16}
          isDisabled={enabled}
          px={x}
          py={y}
          rightIcon={icon}
          rounded={40}
        >
          {text}
        </ButtonChakra>
      </Link>
    </NextLink>
  );
};

export default Button;
