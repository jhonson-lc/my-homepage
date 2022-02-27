import Link from 'next/link';
import { Flex, Image, useColorModeValue } from '@chakra-ui/react';

type LogoProps = {
  size: number;
};

const Logo = ({ size }: LogoProps) => {
  const logoImg = `/images/logo${useColorModeValue('', '-dark')}.svg`;

  return (
    <Link href="/">
      <a>
        <Flex align="center" cursor="pointer" display="inline-flex">
          <Image src={logoImg} w={size} h={size} objectFit="contain" alt="Logo" />
        </Flex>
      </a>
    </Link>
  );
};

export default Logo;
