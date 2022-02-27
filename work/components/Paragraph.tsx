import React from 'react';
import { Text } from '@chakra-ui/react';

const Paragraph: React.FC = ({ children }) => {
  return (
    <Text color="paragraph" lineHeight={1.5} align="justify" fontSize="sm" fontWeight="light">
      {children}
    </Text>
  );
};

export default Paragraph;
