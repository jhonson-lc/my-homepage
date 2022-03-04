import { Stack, Link, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { motion } from "framer-motion";
import { SOCIAL_MEDIAS } from "./constants";

const ListOfSocial = ({ size, color }: { size: number; color: string }) => {
  return (
    <Stack direction="row" justify="center" spacing={5}>
      {SOCIAL_MEDIAS.map((social) => {
        return (
          <NextLink key={social.text} href={social.href} passHref>
            <Link
              as={motion.a}
              _focus={{ boxShadow: "none" }}
              whileHover={{ scale: 1.1 }}
              target="_blank"
            >
              <Icon color={color} w={size} h={size} as={social.icon} />
            </Link>
          </NextLink>
        );
      })}
    </Stack>
  );
};

export default ListOfSocial;
