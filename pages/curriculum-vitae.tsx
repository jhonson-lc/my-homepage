import {
  Box,
  Divider,
  Flex,
  Tag,
  Text,
  Heading,
  ListItem,
  UnorderedList,
  Stack,
  HStack,
  Center,
} from "@chakra-ui/react";
import { AtSignIcon, EmailIcon, PhoneIcon, LinkIcon } from "@chakra-ui/icons";
import StarRating from "react-svg-star-rating";
import Layout from "app/layouts/Layout";

import styles from "../styles/StarRating.module.css";
import {
  WorkType,
  EducationType,
  NaturalLanguageType,
  ProjectType,
} from "../app/types";
import data from "../data/resume.json";
import { H3, H4, TimeSpan } from "../components/Resume";

function App() {
  const { name, email, phone, website, location } = data.basics;
  const { address } = location;

  const summary: string = data.basics.summary;
  const works: WorkType[] = data.work;
  const educations: EducationType[] = data.education;
  const programingLanguages: string[] = data.programmingLanguages;
  const naturalLanguages: NaturalLanguageType[] = data.languages;
  const techStacks = data.skills;
  const personalProjects: ProjectType[] = data.projects;
  const qualifications = data.interests;

  return (
    <Layout
      description="I believe in web development as a powerful communication tool to reflect life projects, communicate ventures and ideas."
      title="Curriculum Vitae - Jhon Lescano"
    >
      <Center>
        <Box bg="#ffffff" margin="5" p={6} w="866px">
          <header>
            <Heading as="h2" fontSize="4xl" letterSpacing="wider">
              {name}
            </Heading>
            <Flex
              alignItems="center"
              flexWrap="wrap"
              justifyContent="space-between"
              marginY="3"
            >
              <Box flex="1 1 auto">
                <Text fontWeight="semibold">
                  <EmailIcon color="#992214" /> {email}
                </Text>
              </Box>
              <Box flex="1 1 auto">
                <Text fontWeight="semibold">
                  <PhoneIcon color="#992214" /> {phone}
                </Text>
              </Box>
              <Box flex="1 1 auto">
                <Text fontWeight="semibold">
                  <LinkIcon color="#992214" /> {website}
                </Text>
              </Box>
              <Box flex="1 1 auto">
                <Text fontWeight="semibold">
                  <AtSignIcon color="#992214" />
                  {address}
                </Text>
              </Box>
            </Flex>
          </header>
          <Box marginY="7">
            <H3 content="Resumen" />
            <Text>{summary}</Text>
          </Box>
          <Stack flexDirection={"row"} gap={12} w="full">
            <Stack w="50%">
              <Box>
                <H3 content="Experiencia" />
                <Divider />
                {works.map(
                  ({
                    company,
                    position,
                    startDate,
                    endDate,
                    summary,
                    highlights,
                  }) => (
                    <>
                      <H4 content={company} />
                      <Text fontSize="md">{position}</Text>
                      <TimeSpan endDate={endDate} startDate={startDate} />
                      <Text marginY="3">{summary}</Text>
                      <UnorderedList>
                        {highlights.map((highlight) => (
                          <ListItem key={highlight} fontSize="sm">
                            {highlight}
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </>
                  ),
                )}
              </Box>
              <Box>
                <H3 content="Formación académica" />
                <Divider />
                {educations.map(({ institution, area, startDate, endDate }) => (
                  <>
                    <H4 content={institution} />
                    <Text fontSize="md">{area}</Text>
                    <TimeSpan endDate={endDate} startDate={startDate} />
                  </>
                ))}
              </Box>
              <Box>
                <H3 content="Lenguajes de programación" />
                <Divider />
                {programingLanguages.map((language) => (
                  <Tag key={language} margin="0.5">
                    {language}
                  </Tag>
                ))}
              </Box>
              <Box>
                <H3 content="Habilidades" />
                <Divider />
                {qualifications.map((qualification) => (
                  <Tag key={qualification.name} margin="0.5">
                    {qualification.name}
                  </Tag>
                ))}
              </Box>
            </Stack>
            <Stack w="50%">
              <Box>
                <H3 content="Proyectos" />
                <Divider />
                {personalProjects.map(({ heading, summary, highlights }) => (
                  <>
                    <H4 content={heading} />
                    <Text fontSize="md" marginBottom="3">
                      {summary}
                    </Text>
                    <UnorderedList>
                      {highlights.map((highlight) => (
                        <ListItem key={highlight} fontSize="sm">
                          {highlight}
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </>
                ))}
              </Box>
              <Box>
                <H3 content="Tecnologías" />
                <Divider />
                {techStacks.map((stack) => (
                  <Tag key={stack.name} margin="0.5">
                    {stack.name}
                  </Tag>
                ))}
              </Box>
              <Box w="100%">
                <H3 content="Idiomas" />
                <Divider />
                {naturalLanguages.map(({ language, fluency, points }) => (
                  <HStack key={language} justifyContent="space-between">
                    <Text fontSize="md">{language}</Text>
                    <HStack>
                      <Text>{fluency}</Text>
                      <StarRating
                        isReadOnly
                        activeColor={"#000000"}
                        containerClassName={styles.star}
                        initialRating={points}
                        size={15}
                        unit="float"
                      />
                    </HStack>
                  </HStack>
                ))}
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Layout>
  );
}

export default App;
