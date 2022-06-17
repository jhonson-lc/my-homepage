import React from "react";
import copy from "copy-to-clipboard";
import { Text, Button, Icon, Stack, useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

const Clipboard = ({ text, ...props }) => {
  const toast = useToast();
  const copyToClipboard = () => {
    copy(text);
    toast({
      title: "Copied to clipboard",
      description: "You can now paste it anywhere",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  return (
    <Stack>
      <Button
        _hover={{ outline: "3px solid red", bg: "secondary" }}
        bg="secondary"
        color="background"
        onClick={copyToClipboard}
        {...props}
      >
        <Text display={{ base: "none", lg: "block" }}>Copy to Clipboard</Text>
        <Icon as={CopyIcon} display={{ base: "block", lg: "none" }} />
      </Button>
    </Stack>
  );
};

export default Clipboard;
