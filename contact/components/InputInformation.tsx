import { Button } from "@chakra-ui/react";

interface Props {
  icon: any;
}

const InputInformation: React.FC<Props> = ({ icon, children }) => {
  return (
    <Button
      size="md"
      variant="ghost"
      color="secondary"
      _hover={{ border: "2px", borderColor: "primary" }}
      leftIcon={icon}
    >
      {children}
    </Button>
  );
};

export default InputInformation;
