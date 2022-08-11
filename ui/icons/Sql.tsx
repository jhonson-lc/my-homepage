import React from "react";
import { Box, BoxProps } from "@chakra-ui/react";

const SqlIcon: React.FC<BoxProps> = ({ ...props }) => {
  return (
    <Box {...props}>
      <svg height={32} width={32} xmlns="http://www.w3.org/2000/svg">
        <title>{"SQL"}</title>
        <path d="M24 21V9h-2v14h8v-2h-6zM18 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h2v-2h-2v-2h1a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Zm-4 12V11h4v10ZM8 23H2v-2h6v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z" />
        <path
          d="M0 0h32v32H0z"
          data-name="&lt;Transparent Rectangle&gt;"
          style={{
            fill: "none",
          }}
        />
      </svg>
    </Box>
  );
};

export default SqlIcon;
