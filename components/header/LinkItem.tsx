import React from "react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import { LinkNav } from "./types";

const LinkItem: React.FC<LinkNav> = ({ onClose, href, path, children, font, external }) => {
  const active: boolean = path === href;

  return (
    <NextLink legacyBehavior href={href || ""}>
      <Link
        _focus={{ boxShadow: "none" }}
        _hover={{ bg: !active ? "hover" : "", color: !active ? "primary" : "" }}
        borderColor="primary"
        borderWidth={active ? "2px" : "0"}
        color={active ? "primary" : "inherit"}
        display="inline-block"
        fontSize={font?.size}
        fontWeight={font?.weight}
        isExternal={external}
        pos="relative"
        px={6}
        py={2}
        rounded="40px"
        onClick={onClose}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
