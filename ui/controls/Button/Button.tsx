import React from "react";
import { Button as ChakraButton, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Button = ({ label = "default", href, ...props }) => {
  return (
    <NextLink passHref href={href}>
      <Link>
        <ChakraButton
          color="primary"
          fontSize="sm"
          fontWeight="regular"
          maxW="min-content"
          rightIcon={<ArrowForwardIcon />}
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
