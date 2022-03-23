import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Button from "ui/controls/Button/Button";

interface Props {
  title?: string;
  desc?: string;
  labelB?: string;
  hrefB?: string;
}

const Section: React.FC<Props> = ({ title, children, labelB, hrefB }) => {
  const StackM = motion(Stack);

  return (
    <StackM direction="column" spacing={10}>
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Heading color="heading" variant="title-section">
          {title}
        </Heading>
        {hrefB && <Button href={hrefB} label={labelB} />}
      </Stack>
      <Stack align="flex-start" spacing={5} w="100%">
        {children}
      </Stack>
    </StackM>
  );
};

export default Section;
