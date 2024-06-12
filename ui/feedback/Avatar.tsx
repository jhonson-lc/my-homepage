import React from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

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

const Avatar: React.FC<Props> = ({ height = 400, width = 200, scale, rounded }) => {
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
      <img
        alt="Foto de Jhon"
        src="/profile.jpg"
        style={{
          height: "100%",
          objectFit: "cover",
          width: "100%",
        }}
      />
    </BoxM>
  );
};

export default Avatar;
