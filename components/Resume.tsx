import { Text, Heading, Divider } from "@chakra-ui/react";

export const H3 = ({ content }: any) => {
  return (
    <Heading
      as="h3"
      fontSize="sm"
      fontWeight={"500"}
      textAlign={"center"}
      textTransform={"uppercase"}
      opacity={1}
      borderColor={"#000"}
      px={4}
      marginBottom={2}
    >
      <Divider marginBottom={2} py={2} />
      {content}
    </Heading>
  );
};

export const H4 = ({ content }: any) => {
  return (
    <Text fontSize="xs" fontWeight="semibold" display={"inline"}>
      {content}
    </Text>
  );
};

type TimeSpanProps = {
  startDate: string;
  endDate?: string;
};

export const TimeSpan: React.FC<TimeSpanProps> = ({ startDate, endDate }) => {
  return (
    <Text fontSize="xs" fontWeight={"500"}>
      {startDate} {endDate && "~ " + endDate}
    </Text>
  );
};

export const TitleItem = ({ children }: any) => {
  return (
    <Text as="h4" fontWeight="600" minW={180} display={"inline-block"}>
      {children}
    </Text>
  );
};
