import React from "react";
import { Button as ChakraButton, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Button = ({ label = "default", href, ...props }) => {
  return (
    <NextLink passHref href={href}>
      <Link>
        <ChakraButton
          color="primary"
          fontSize="sm"
          fontWeight="regular"
          maxW="min-content"
          variant="link"
          {...props}
        >
          {label}
        </ChakraButton>
      </Link>
    </NextLink>
  );
};

export default Button;
