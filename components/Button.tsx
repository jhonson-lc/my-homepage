import React from "react";
import NextLink from "next/link";
import { Button as ButtonChakra, Link } from "@chakra-ui/react";

interface Props {
  text: string;
  color?: string;
  bg?: string;
  href: string;
  icon?: any;
  external?: boolean;
}

const Button: React.FC<Props> = ({
  text,
  color = "background",
  bg = "primary",
  href,
  icon,
  external,
}) => {
  const [hover, setHover] = React.useState<boolean>(false);
  return (
    <NextLink passHref href={href}>
      <Link isExternal={external}>
        <ButtonChakra
          _after={{
            content: "''",
            height: "100%",
            width: "100%",
            position: "absolute",
            rounded: "40px",
            outline: `${hover ? "2px" : "0px"} solid white`,
            transform: `${hover ? "scaleX(1.05) scaleY(1.2)" : "scale(1)"}`,
            transition: "transform 0.2s ease-in-out",
          }}
          _hover={{
            bg: bg,
            border: "3px solid transparent",
          }}
          bg={bg}
          borderWidth={3}
          color={color}
          fontSize={16}
          px="35px"
          py="30px"
          rightIcon={icon}
          rounded={40}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {text}
        </ButtonChakra>
      </Link>
    </NextLink>
  );
};

export default Button;
