import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  height?: number;
  width?: number;
  scale?: number;
  rounded?: boolean;
}

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Avatar: React.FC<Props> = ({
  height = 400,
  width = 200,
  scale,
  rounded,
}) => {
  const BoxM = motion(Box);

  return (
    <BoxM
      animate="enter"
      exit="exit"
      h={height}
      initial="initial"
      overflow="hidden"
      pos="relative"
      rounded={rounded && "full"}
      transform={`scale(${scale}) `}
      transition={{ duration: 0.5 }}
      variants={variants}
      w={width}
    >
      <Image
        alt="Foto de Jhon"
        layout="fill"
        objectFit="cover"
        objectPosition={"left"}
        src="/profile.jpg"
      />
    </BoxM>
  );
};

export default Avatar;
