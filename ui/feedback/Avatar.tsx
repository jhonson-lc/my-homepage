import React from "react";
import {Image} from "@chakra-ui/react";

interface Props {
  size?: number;
}

const Avatar: React.FC<Props> = ({size = 24}) => {
  return (
    <Image
      bgGradient="linear(6deg, rgba(255,255,255,1) 0%, rgba(158,154,154,1) 100%)"
      borderRadius="100%"
      filter="grayscale(100%)"
      h={size}
      src="../images/foto.png"
      w={size}
    />
  );
};

export default Avatar;
