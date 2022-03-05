import React from "react";
import NextLink from "next/link";
import {Link} from "@chakra-ui/react";

import {LinkNav} from "./types";

const LinkItem: React.FC<LinkNav> = ({onClose, href, path, children, font}) => {
  const active: boolean = path === href;

  return (
    <NextLink passHref href={href}>
      <Link
        _focus={{boxShadow: "none"}}
        _hover={{textDecoration: !active ? "underline" : ""}}
        color={active ? "primary" : "inherit"}
        display="inline-block"
        fontSize={font?.size}
        fontWeight={font?.weight}
        pos="relative"
        textDecoration={active ? "underline" : "none"}
        onClick={onClose}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
