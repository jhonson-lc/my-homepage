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
      bgGradient="linear(6deg, rgba(255,255,255,1) 0%, rgba(158,154,154,1) 100%)"
      borderRadius="100%"
      exit="exit"
      filter="grayscale(100%)"
      h={size}
      initial="initial"
      pos="relative"
      transform={`scale(${scale})`}
      transition={{ duration: 0.5 }}
      variants={variants}
      w={size}
    >
      <Image alt="Jhon" layout="fill" src="/profile.png" />
    </BoxM>
  );
};

export default Avatar;
