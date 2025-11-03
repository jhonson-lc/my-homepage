import { Stack, Heading, HStack, Text } from "@chakra-ui/react";
import Paragraph from "work/components/Paragraph";

type Exp = {
  name: string;
  position: string;
  startDate: string;
  endDate?: string | null;
  summary: string;
};

const EXPERIENCES: Exp[] = [
  {
    name: "Referee Network",
    position: "Fundador y CEO",
    startDate: "08-01-2023",
    endDate: null,
    summary:
      "Desarrollé una aplicación web para conectar árbitros certificados amateur y profesionales. ¡Crear oportunidades, comunidad y crecimiento!.",
  },
  {
    name: "TorneoPro",
    position: "Fundador y CEO",
    startDate: "08-01-2023",
    endDate: null,
    summary:
      "Desarrollé una aplicación web para gestionar torneos deportivos y optimizar el tiempo de los organizadores.",
  },
  {
    name: "Spaciart Ecuador",
    position: "Desarrollador Frontend",
    startDate: "03-08-2021",
    endDate: "03-10-2021",
    summary:
      "Desarrollo de su aplicación web, con el objetivo de que los clientes puedan comprar sus productos.",
  },
  {
    name: "Complejo turístico El Rincón del Cuy",
    position: "Desarrollador Frontend",
    startDate: "06-03-2022",
    endDate: "06-05-2022",
    summary:
      "Desarrollo de su aplicación web, con el objetivo de que los clientes puedan conocer todos los servicios que ofrece el complejo.",
  },
];

export default function Component() {
  return (
    <Stack>
      <Stack spacing={8}>
        {EXPERIENCES.map(({ endDate, name, position, startDate, summary }) => {
          const startYear = new Date(startDate).getFullYear();
          const endYear = endDate != null ? new Date(endDate).getFullYear() : "Actual";
          return (
            <Stack spacing={2} key={name}>
              <Heading fontWeight={500} color={"primary"} fontSize={"md"}>
                {name}
              </Heading>
              <HStack color={"experience"} spacing={2} fontSize="sm">
                <Text>{position}</Text>
                <Text>•</Text>
                <div>
                  <time dateTime={startDate} data-title={startDate}>
                    {startYear}
                  </time>
                  {" - "}
                  <time dateTime={endDate ? endDate : ""} data-title={endDate}>
                    {endYear}
                  </time>
                </div>
              </HStack>
              <Paragraph size={15} line={1.5} weight={500}>
                {summary}
              </Paragraph>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
}
