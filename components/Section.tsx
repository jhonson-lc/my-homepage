import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

import ArrowMore from "./ArrowMore";

interface Props {
  title?: string;
  subtitle?: string;
  desc?: string;
  labelB?: string;
  hrefB?: string;
}

const Section: React.FC<Props> = ({
  title,
  subtitle,
  children,
  labelB,
  hrefB,
}) => {
  const StackM = motion(Stack);

  return (
    <StackM direction="column">
      <Stack py={20}>
        <Stack
          alignItems="center"
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Heading
            color="heading"
            fontSize={{ base: "38px" }}
            fontWeight={500}
            variant="title-section"
          >
            {title}
          </Heading>
          {hrefB && (
            <ArrowMore
              arrow={true}
              direction="row"
              href={hrefB}
              text={labelB}
            />
          )}
        </Stack>
        {subtitle && (
          <Heading
            color="#575757"
            display={{ base: "none", md: "block" }}
            fontSize={{ base: "38px" }}
            fontWeight={500}
          >
            {subtitle}
          </Heading>
        )}
      </Stack>
      <Stack align="flex-start" spacing={5} w="100%">
        {children}
      </Stack>
    </StackM>
  );
};

export default Section;
