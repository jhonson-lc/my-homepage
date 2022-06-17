import { Heading, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

import { latestSkills, skills } from "./constants";

const Skills: React.FC = () => {
  const g = useBreakpointValue({ base: 8, lg: 20 });
  return (
    <Stack gap={16}>
      <Stack
        direction="row"
        gap={g}
        justifyContent="center"
        w="100%"
        wrap="wrap"
      >
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
      <Stack borderColor="primary" borderLeftWidth={10} gap={6}>
        <Heading color="primary" ml={2}>
          Latest technology used
        </Heading>
        <Stack
          direction="row"
          gap={g}
          justifyContent="center"
          w="100%"
          wrap="wrap"
        >
          {latestSkills.map((skill) => {
            return (
              <SkillImage
                key={skill.stack}
                image={skill.image}
                name={skill.stack}
              />
            );
          })}
        </Stack>
      </Stack>
    </Stack>
  );
};

const SkillImage = ({ image, name }) => {
  return (
    <Stack
      alignItems="center"
      backdropBlur={8}
      backdropFilter="auto"
      bg="rgba( 255, 255, 255, 0.1 )"
      direction="row"
      px="20px"
      py="10px"
      rounded="40px"
    >
      {image}
      <Text fontSize="16px" fontWeight={400}>
        {name}
      </Text>
    </Stack>
  );
};

export default Skills;
