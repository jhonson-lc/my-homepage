import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  limitLines?: number;
}

const Paragraph: React.FC<Props> = ({ children, limitLines }) => {
  return (
    <Text
      align="justify"
      color="paragraph"
      fontSize="sm"
      fontWeight="light"
      lineHeight={1.5}
      noOfLines={limitLines}
    >
      {children}
    </Text>
  );
};

export default Paragraph;
