import Link from "next/link";
import { Flex, Image, useColorModeValue } from "@chakra-ui/react";

interface Props {
  size?: number;
}

const Logo: React.FC<Props> = ({ size = 24, ...props }) => {
  const logoImg = `/images/logo${useColorModeValue("", "-dark")}.svg`;

  return (
    <Link href="/">
      <a>
        <Flex {...props} align="center" cursor="pointer" display="inline-flex">
          <Image
            src={logoImg}
            w={size}
            h={size}
            objectFit="contain"
            alt="Logo"
          />
        </Flex>
      </a>
    </Link>
  );
};

export default Logo;
