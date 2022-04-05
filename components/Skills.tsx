import { Stack, Text } from "@chakra-ui/react";
import React from "react";

import { skills } from "./constants";

const Skills: React.FC = () => {
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
      <Text fontSize="xs" variant="information">
        {name}
      </Text>
    </Stack>
  );
};

export default Skills;
