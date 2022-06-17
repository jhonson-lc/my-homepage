import React from "react";
import Link from "next/link";
import { Button } from "@chakra-ui/react";

interface Props {
  size?: number;
}

const Logo: React.FC<Props> = ({ size = 24, ...props }) => {
  return (
    <Link href="/">
      <Button fontSize={size} fontWeight={700} variant="link" {...props}>
        Jhon A. Lescano
      </Button>
    </Link>
  );
};

export default Logo;
