import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  icon: any;
}

const InputInformation: React.FC<Props> = ({ icon, children }) => {
  return (
    <Button
      _focus={{ boxShadow: "none" }}
      _hover={{ border: "2px", borderColor: "primary" }}
      color="secondary"
      leftIcon={icon}
      size="md"
      variant="ghost"
    >
      {children}
    </Button>
  );
};

export default InputInformation;
