import React from "react";
import { Text, Button as ButtonUI, Stack, useColorModeValue, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Button from "components/Button";
import Link from "next/link";

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
  const back = useColorModeValue("blackAlpha.50", "whiteAlpha.50");

  return (
    <StackM
      animate="enter"
      className="item-work"
      as="article"
      backdropBlur={8}
      backdropFilter="auto"
      bg={back}
      direction="column"
      exit="exit"
      gap={2}
      initial="initial"
      justifyContent="space-between"
      p={[6, 12]}
      rounded="20px"
      transition={{ duration: 0.5, delay: i * 0.3 }}
      variants={variants}
      w="100%"
      _after={{
        background: "effect",
      }}
    >
      <Stack gap={2} spacing={0}>
        <WorkImage thumbnail={work.thumbnail} title={work.title} video={work.video} />
        <Text fontSize={[28, 32]} fontWeight={500} variant="information">
          {work.title}
        </Text>
        <Box display={{ base: "none", lg: "block" }}>
          <Paragraph line={10} size={16} weight={300}>
            {work.description}
          </Paragraph>
        </Box>
      </Stack>
      <Stack gap={2}>
        <Stack alignItems="center" display="block">
          <Button
            bg="secondary"
            external={true}
            href={work.siteurl || ""}
            icon={<ExternalLinkIcon />}
            text="Visit site"
          />
        </Stack>
        <Stack alignItems="end">
          <Link href={`/work/${work.id}`}>
            <ButtonUI
              _focus={{ boxShadow: "none" }}
              _hover={{ bg: "none", color: "red.500" }}
              rightIcon={<ChevronRightIcon />}
              variant="ghost"
            >
              READ MORE
            </ButtonUI>
          </Link>
        </Stack>
      </Stack>
    </StackM>
  );
};

export default ItemWork;
