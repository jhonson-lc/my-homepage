import React from "react";
import {Stack, Heading} from "@chakra-ui/react";

interface Post {
  title?: string;
  desc?: string;
}

const Section: React.FC<Post> = ({title, children}) => {
  return (
    <Stack direction="column" spacing={10}>
      <Heading color="heading" variant="title-section">
        {title}
      </Heading>
      <Stack align="flex-start" spacing={5} w="100%">
        {children}
      </Stack>
    </Stack>
  );
};

export default Section;
