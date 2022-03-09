import { Stack, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";

import { SOCIAL_MEDIAS } from "./constants";

const ListOfSocial = ({ size, color }: { size: number; color: string }) => {
  return (
    <Stack direction="row" justify="center" spacing={5}>
      {SOCIAL_MEDIAS.map((social) => {
        return (
          <NextLink key={social.text} passHref href={social.href}>
            <Link
              _focus={{ boxShadow: "none" }}
              as={motion.a}
              target="_blank"
              whileHover={{ scale: 1.1 }}
            >
              <Icon as={social.icon} color={color} h={size} w={size} />
            </Link>
          </NextLink>
        );
      })}
    </Stack>
  );
};

export default ListOfSocial;
