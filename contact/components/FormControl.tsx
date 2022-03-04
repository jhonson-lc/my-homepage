import React from "react";
import {
  FormControl as ChakraFormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";

import { IconType } from "react-icons";

interface Props {
  label: string;
  icon?: IconType;
  help?: string;
}

const FormControl: React.FC<Props> = ({ label, icon, help, children }) => {
  return (
    <ChakraFormControl isRequired>
      <FormLabel display="inline-block">{label}</FormLabel>
      {!children && (
        <InputGroup borderColor="primary">
          <InputLeftElement color="primary" w={5} ml={2} as={icon} />
          <Input autoComplete="off" type="text" size="md" />
        </InputGroup>
      )}
      {children && children}
      <FormHelperText>{help}</FormHelperText>
    </ChakraFormControl>
  );
};

export default FormControl;
