import {format, parseISO} from "date-fns";
import {Box} from "@chakra-ui/react";

export default function formatDate(value: string) {
  return (
    <Box as="time" textTransform="capitalize">
      {format(parseISO(value), "LLLL d, yyyy")}
    </Box>
  );
}
