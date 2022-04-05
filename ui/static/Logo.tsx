import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Flex, useColorModeValue } from "@chakra-ui/react";

interface Props {
  size?: number;
}

const Logo: React.FC<Props> = ({ size = 24, ...props }) => {
  const logoImg = `/logo${useColorModeValue("", "-dark")}.svg`;

  return (
    <Link href="/">
      <a>
        <Flex
          h={size}
          w={size}
          {...props}
          align="center"
          cursor="pointer"
          display="inline-flex"
          position="relative"
        >
          <Image alt="Logo" layout="fill" src={logoImg} />
        </Flex>
      </a>
    </Link>
  );
};

export default Logo;
