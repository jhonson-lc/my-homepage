import {format, parseISO} from "date-fns";
import {es} from "date-fns/locale";
import {Box} from "@chakra-ui/react";

export default function formatDate(value: string) {
  return (
    <Box as="time" textTransform="capitalize">
      {format(parseISO(value), "LLLL d, yyyy", {locale: es})}
    </Box>
  );
}
