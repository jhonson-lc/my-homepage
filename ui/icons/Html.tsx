import { BoxProps, Box } from "@chakra-ui/react";
import React from "react";

const HtmlIcon: React.FC<BoxProps> = (props) => (
  <Box {...props}>
    <svg
      height={48}
      viewBox="0 0 48 48"
      width={48}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M41 5H7l3 34 14 4 14-4 3-34z" fill="#E65100" />
      <path d="M24 8v31.9l11.2-3.2L37.7 8z" fill="#FF6D00" />
      <path
        d="M24 25v-4h8.6l-.7 11.5-7.9 2.6v-4.2l4.1-1.4.3-4.5H24zm8.9-8 .3-4H24v4h8.9z"
        fill="#FFF"
      />
      <path
        d="M24 30.9v4.2l-7.9-2.6-.4-5.5h4l.2 2.5 4.1 1.4zM19.1 17H24v-4h-9.1l.7 12H24v-4h-4.6l-.3-4z"
        fill="#EEE"
      />
    </svg>
  </Box>
);

export default HtmlIcon;
