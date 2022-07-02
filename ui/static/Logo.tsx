import React from "react";
import Link from "next/link";
import { Text, Button as ButtonChakra, HStack } from "@chakra-ui/react";
import styled from "@emotion/styled";

interface Props {
  size?: number;
}

const Button = styled(ButtonChakra)`
  position: relative;
  botder-radius: none;
  background-color: transparent;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 8px;
    border-radius: 40px;
    height: 8px;
    background: red;
  }
  &:hover {
    background: none;
    &:after {
      animation: pulse 2.5s infinite;
    }
  }
  @keyframes pulse {
    0% {
      top: 0;
      left: 0;
    }
    25% {
      top: 0;
      left: 100%;
      background: yellow;
    }
    50% {
      left: 100%;
      top: 100%;
      background: blue;
    }
    75% {
      left: 0;
      top: 100%;
      background: green;
    }
    100% {
      top: 0;
      left: 0;
    }
  }
`;

const Logo: React.FC<Props> = ({ size = 24, ...props }) => {
  return (
    <Link href="/">
      <Button
        _focus={{ boxShadow: "none" }}
        color="secondary"
        fontSize={size}
        fontWeight={400}
        p={8}
        {...props}
      >
        <HStack>
          <Text>Jhon</Text>
          <Text display={{ base: "none", md: "block" }}> A. Lescano</Text>
        </HStack>
      </Button>
    </Link>
  );
};

export default Logo;
