import React from "react";
import { Text, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Button from "components/Button";
import ButtonUI from "ui/controls/Button/Button";

import { Work } from "../types";

import WorkImage from "./WorkImage";
import Paragraph from "./Paragraph";

interface Props {
  work: Work;
  i?: any;
}

const variants = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

const ItemWork: React.FC<Props> = ({ work, i }) => {
  const StackM = motion(Stack);

  return (
    <StackM
      animate="enter"
      as="article"
      backdropBlur={8}
      backdropFilter="auto"
      bg="rgba( 255, 255, 255, 0.1 )"
      direction="column"
      exit="exit"
      gap={6}
      initial="initial"
      justifyContent="space-between"
      p={[6, 16]}
      rounded="20px"
      transition={{ duration: 0.5, delay: i * 0.3 }}
      variants={variants}
      w="100%"
    >
      <Stack gap={2} spacing={0}>
        <WorkImage work={work} />
        <Text fontSize={[32, 36]} fontWeight={500} variant="information">
          {work.title}
        </Text>
        <Paragraph line={10} size={20} weight={400}>
          Es una empresa que ofrece a sus clientes, productos y servicios en
          muebles de calidad
        </Paragraph>
      </Stack>
      <Stack gap={4}>
        <Stack alignItems="center" display="block">
          <Button
            bg="secondary"
            external={true}
            href={work.siteurl}
            icon={<ExternalLinkIcon />}
            text="Visit site"
          />
        </Stack>
        <Stack alignItems="end">
          <ButtonUI
            href={`/work/${work.id}`}
            label="READ MORE"
            rightIcon={<ChevronRightIcon />}
          />
        </Stack>
      </Stack>
    </StackM>
  );
};

export default ItemWork;
