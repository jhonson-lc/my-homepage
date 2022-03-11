import { Stack, Image, Text } from "@chakra-ui/react";
import React from "react";

import { skills } from "./constants";

interface Props {}

const Skills: React.FC<Props> = () => {
  return (
    <Stack direction="row" gap={3} justifyContent="center" w="100%" wrap="wrap">
      {skills.map((skill) => {
        return (
          <SkillImage
            key={skill.stack}
            image={skill.image}
            name={skill.stack}
          />
        );
      })}
    </Stack>
  );
};

const SkillImage = ({ image, name }) => {
  return (
    <Stack alignItems="center" direction="column">
      {image}
      {image.length && <Image h={12} src={image} w={12} />}
      <Text fontSize="xs" variant="information">
        {name}
      </Text>
    </Stack>
  );
};

export default Skills;
