import React from "react";
import { Button as ChakraButton, Link, Box } from "@chakra-ui/react";
import NextLink from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Button = ({ label = "default", href, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <Link>
        <ChakraButton
          variant="link"
          rightIcon={<ArrowForwardIcon />}
          color="primary"
          maxW="min-content"
          fontWeight="regular"
          fontSize="sm"
          {...props}
        >
          {label}
        </ChakraButton>
      </Link>
    </NextLink>
  );
};

export default Button;
