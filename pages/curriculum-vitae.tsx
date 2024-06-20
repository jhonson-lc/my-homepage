import {
  Box,
  Divider,
  Flex,
  Text,
  Heading,
  Stack,
  HStack,
  Center,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";
import { AtSignIcon, EmailIcon, PhoneIcon, LinkIcon } from "@chakra-ui/icons";
import StarRating from "react-svg-star-rating";
import Layout from "app/layouts/Layout";
import type { NextPage } from "next";
import Button from "ui/controls/Button/Button";
import jsPDF, { jsPDFOptions } from "jspdf";
import html2canvas from "html2canvas";

import styles from "../styles/StarRating.module.css";
import { WorkType, EducationType, NaturalLanguageType, ProjectType } from "../app/types";
import data from "../data/resume.json";
import { H3, H4, TimeSpan } from "../components/Resume";

const Curriculum: NextPage = () => {
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

  const options: jsPDFOptions = {
    orientation: "p",
    unit: "pt",
    format: "a4",
  };

  const createPDF = async () => {
    const pdf = new jsPDF(options);
    const data = await html2canvas(document.querySelector("#curriculum-vitae") as HTMLElement);
    const img = data.toDataURL("image/png");
    const imgProperties = pdf.getImageProperties(img);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight - 150);
    pdf.save("curriculum-Lescano-Jhon.pdf");
  };

  return (
    <Layout
      description="I believe in web development as a powerful communication tool to reflect life projects, communicate ventures and ideas."
      title="Curriculum Vitae - Jhon Lescano"
    >
      <Center display={{ base: "none", lg: "flex" }}>
        <Button text="Descargar CV en PDF" onClick={() => createPDF()} />
      </Center>
      <Center display={{ base: "none", lg: "flex" }} id="curriculum-vitae">
        <Stack bg="#ffffff" color="#000000" m={4} p={12} width="866px">
          <Stack as={"header"} gap={4} display={"flex"} flexDir={"row"} justifyContent={"center"}>
            <Image w={24} h={24} src="/photo.jpg" alt="Jhon Lescano" objectFit={"cover"} />
            <div>
              <Heading as="h2" fontSize="2xl" letterSpacing="wider">
                {name}
              </Heading>
              <Flex alignItems="center" flexWrap="wrap" justifyContent="space-between" marginY="3">
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
            </div>
          </Stack>
          <Box marginY="4">
            <H3 content="Resumen" />
            <Text py={2}>{summary}</Text>
          </Box>
          <Stack flexDirection={"row"} gap={12} spacing={0} w="full">
            <Stack w="50%">
              <Box>
                <H3 content="Experiencia" />
                <Divider py={2} />
                {works.map(({ company, position, startDate, endDate, summary, highlights }) => (
                  <Stack key={company}>
                    <H4 content={company} />
                    <Text fontSize="md">{position}</Text>
                    <TimeSpan endDate={endDate} startDate={startDate} />
                    <Text marginY="3">{summary}</Text>
                    {highlights.map((highlight) => (
                      <Text key={highlight} fontSize="sm">
                        - {highlight}
                      </Text>
                    ))}
                  </Stack>
                ))}
              </Box>
              <Box>
                <H3 content="Formación académica" />
                <Divider py={2} />
                {educations.map(({ institution, area, startDate, endDate }) => (
                  <Stack key={institution}>
                    <H4 content={institution} />
                    <Text fontSize="md">{area}</Text>
                    <TimeSpan endDate={endDate} startDate={startDate} />
                  </Stack>
                ))}
              </Box>
              <Box>
                <H3 content="Lenguajes de programación" />
                <Divider py={2} />
                <SimpleGrid columns={2} w="full">
                  {programingLanguages.map((language) => (
                    <Text key={language}>- {language}</Text>
                  ))}
                </SimpleGrid>
              </Box>
              <Box>
                <H3 content="Habilidades" />
                <Divider py={2} />
                {qualifications.map((qualification) => (
                  <Text key={qualification.name}>- {qualification.name}</Text>
                ))}
              </Box>
            </Stack>
            <Stack w="50%">
              <Box>
                <H3 content="Proyectos" />
                <Divider py={2} />
                {personalProjects.map(({ heading, summary, highlights }) => (
                  <Stack key={heading}>
                    <H4 content={heading} />
                    <Text fontSize="md" marginBottom="3">
                      {summary}
                    </Text>
                    {highlights.map((highlight) => (
                      <Text key={highlight} fontSize="sm">
                        - {highlight}
                      </Text>
                    ))}
                  </Stack>
                ))}
              </Box>
              <Stack>
                <H3 content="Tecnologías" />
                <Divider py={2} />
                <SimpleGrid columns={2} w="full">
                  {techStacks.map((stack) => (
                    <Text key={stack.name}>- {stack.name}</Text>
                  ))}
                </SimpleGrid>
              </Stack>
              <Box w="100%">
                <H3 content="Idiomas" />
                <Divider py={2} />
                {naturalLanguages.map(({ language, fluency, points }) => (
                  <HStack key={language} justifyContent="space-between">
                    <Text fontSize="md">{language}</Text>
                    <HStack>
                      <Text fontSize="sm">{fluency}</Text>
                      <Box pt={3}>
                        <StarRating
                          isReadOnly
                          activeColor={"#000000"}
                          containerClassName={styles.star}
                          initialRating={points}
                          size={15}
                          unit="float"
                        />
                      </Box>
                    </HStack>
                  </HStack>
                ))}
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Center>
    </Layout>
  );
};

export default Curriculum;
