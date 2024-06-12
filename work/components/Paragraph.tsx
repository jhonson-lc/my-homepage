import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  limitLines?: number;
  size?: number;
  weight?: number;
  line?: number;
  children: React.ReactNode;
}

const Paragraph: React.FC<Props> = ({ children, size = 36, limitLines, weight, line = "54px" }) => {
  return (
    <Text
      color="paragraph"
      fontSize={{ base: size / 1.5, md: size }}
      fontWeight={weight}
      lineHeight={line}
      noOfLines={limitLines}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
