import React from "react";
import NextLink from "next/link";
import { LinkNav } from "./types";
import { Link } from "@chakra-ui/react";

const LinkItem: React.FC<LinkNav> = ({
  onClose,
  href,
  path,
  children,
  font,
}) => {
  const active: boolean = path === href;

  return (
    <NextLink href={href} passHref>
      <Link
        onClick={onClose}
        display="inline-block"
        pos="relative"
        _focus={{ boxShadow: "none" }}
        _hover={{ textDecoration: !active ? "underline" : "" }}
        textDecoration={active ? "underline" : "none"}
        color={active ? "primary" : "inherit"}
        fontSize={font?.size}
        fontWeight={font?.weight}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
