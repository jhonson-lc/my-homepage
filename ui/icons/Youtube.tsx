import React from "react";
import { Box } from "@chakra-ui/react";

const YoutubeIcon: React.FC = () => {
  return (
    <Box>
      <svg
        height="100%"
        viewBox="0 0 461.001 461.001"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M365.257 67.393H95.744C42.866 67.393 0 110.259 0 163.137v134.728c0 52.878 42.866 95.744 95.744 95.744h269.513c52.878 0 95.744-42.866 95.744-95.744V163.137c0-52.878-42.866-95.744-95.744-95.744zm-64.751 169.663-126.06 60.123c-3.359 1.602-7.239-.847-7.239-4.568V168.607c0-3.774 3.982-6.22 7.348-4.514l126.06 63.881c3.748 1.899 3.683 7.274-.109 9.082z" />
      </svg>
    </Box>
  );
};

export default YoutubeIcon;
