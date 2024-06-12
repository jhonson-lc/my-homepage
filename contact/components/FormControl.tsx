import React from "react";
import {
  FormControl as ChakraFormControl,
  FormLabel,
  FormHelperText,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  icon?: IconType;
  help?: string;
  children?: React.ReactNode;
}

const FormControl: React.FC<Props> = ({ label, icon, help, children }) => {
  return (
    <ChakraFormControl isRequired>
      <FormLabel display="inline-block">{label}</FormLabel>
      {!children && (
        <InputGroup borderColor="primary">
          <InputLeftElement as={icon} color="primary" ml={2} w={5} />
          <Input autoComplete="off" size="md" type="text" />
        </InputGroup>
      )}
      {children && children}
      <FormHelperText>{help}</FormHelperText>
    </ChakraFormControl>
  );
};

export default FormControl;
