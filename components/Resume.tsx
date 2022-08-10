import { Text, Heading } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons";

export const H3 = ({ content }: any) => {
  return (
    <Heading as="h3" fontSize="3xl">
      {content}
    </Heading>
  );
};

export const H4 = ({ content }: any) => {
  return (
    <Heading
      as="h4"
      fontSize="xl"
      fontWeight="semibold"
      marginBottom="1"
      marginTop="4"
    >
      {content}
    </Heading>
  );
};

type TimeSpanProps = {
  startDate: string;
  endDate: string;
};

export const TimeSpan: React.VFC<TimeSpanProps> = ({ startDate, endDate }) => {
  return (
    <Text fontSize="sm">
      <CalendarIcon color="#992214" /> {startDate} ~ {endDate}
    </Text>
  );
};
