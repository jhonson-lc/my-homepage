import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const CSS: React.FC<BoxProps> = (props) => (
  <Box {...props}>
    <svg
      height={48}
      viewBox="0 0 48 48"
      width={48}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 5H7l3 34 14 4 14-4 3-34z" fill="#0277BD" />
      <path d="M24 8v31.9l11.2-3.2L37.7 8z" fill="#039BE5" />
      <path
        d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"
        fill="#FFF"
      />
      <path
        d="M24 13v4h-8.9l-.3-4H24zm-4.6 8 .2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
        fill="#EEE"
      />
    </svg>
  </Box>
);

export default CSS;
