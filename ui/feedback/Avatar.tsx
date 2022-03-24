import React from "react";
import { Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  size?: number;
}

const variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

const Avatar: React.FC<Props> = ({ size = 24 }) => {
  const ImageM = motion(Image);

  return (
    <ImageM
      animate="enter"
      bgGradient="linear(6deg, rgba(255,255,255,1) 0%, rgba(158,154,154,1) 100%)"
      borderRadius="100%"
      exit="exit"
      filter="grayscale(100%)"
      h={size}
      initial="initial"
      src="/profile.png"
      transition={{ duration: 0.5 }}
      variants={variants}
      w={size}
    />
  );
};

export default Avatar;
