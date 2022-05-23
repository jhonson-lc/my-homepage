import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  size?: number;
  scale?: number;
}

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Avatar: React.FC<Props> = ({ size = 110, scale }) => {
  const BoxM = motion(Box);

  return (
    <BoxM
      animate="enter"
      exit="exit"
      h={size}
      initial="initial"
      overflow="hidden"
      pos="relative"
      rounded="full"
      transform={`scale(${scale})`}
      transition={{ duration: 0.5 }}
      variants={variants}
      w={size}
    >
      <Image alt="Foto de Jhon" layout="fill" src="/profile.jpg" />
    </BoxM>
  );
};

export default Avatar;
