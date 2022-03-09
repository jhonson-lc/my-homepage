import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface Props {
  title?: string;
  desc?: string;
}

const Section: React.FC<Props> = ({ title, children }) => {
  const StackM = motion(Stack);

  return (
    <StackM direction="column" spacing={10}>
      <Heading color="heading" variant="title-section">
        {title}
      </Heading>
      <Stack align="flex-start" spacing={5} w="100%">
        {children}
      </Stack>
    </StackM>
  );
};

export default Section;
