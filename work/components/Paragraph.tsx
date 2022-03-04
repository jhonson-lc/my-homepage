import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  limitLines?: number;
}

const Paragraph: React.FC<Props> = ({ children, limitLines }) => {
  return (
    <Text
      color="paragraph"
      lineHeight={1.5}
      align="justify"
      fontSize="sm"
      fontWeight="light"
      noOfLines={limitLines}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
