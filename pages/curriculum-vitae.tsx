import Layout from "app/layouts/Layout";
import Button from "ui/controls/Button/Button";
import React from "react";
import {
  Box,
  Text,
  Heading,
  Stack,
  HStack,
  Center,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import StarRating from "react-svg-star-rating";
import jsPDF, { jsPDFOptions } from "jspdf";
import html2canvas from "html2canvas";
import styles from "../styles/StarRating.module.css";

import { WorkType, EducationType, NaturalLanguageType, ProjectType } from "../app/types";
import data from "../data/resume.json";
import { H3, H4, TimeSpan, TitleItem } from "../components/Resume";

const Curriculum = () => {
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
  const certificates = data.certificates;

  const options: jsPDFOptions = {
    orientation: "p",
    unit: "pt",
    format: "a4",
  };

  const createPDF = async () => {
    const pdf = new jsPDF(options);
    const element = document.querySelector("#curriculum-vitae") as HTMLElement;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    console.log({
      pageWidth,
      pageHeight,
    });
    const margin = 10;
    const contentWidth = pageWidth - 2 * margin;
    const contentHeight = pageHeight - 2 * margin + 520;

    const totalHeight = element.scrollHeight; // Cambiar a scrollHeight para obtener la altura total
    const pageCount = Math.ceil(totalHeight / contentHeight);

    for (let i = 0; i < pageCount; i++) {
      if (i > 0) pdf.addPage();

      const canvas = await html2canvas(element, {
        scale: 3, // Aumentar la escala para mejor calidad
        y: i * contentHeight,
        height: contentHeight, // Añadir 10px para evitar cortes
        windowWidth: element.scrollWidth,
        windowHeight: totalHeight, // Usar scrollHeight para asegurar la captura total
      });

      const imgData = canvas.toDataURL("image/png");
      const imgProps = pdf.getImageProperties(imgData);
      const imgHeight = (imgProps.height * contentWidth) / imgProps.width; // Mantener la relación de aspecto

      pdf.addImage(imgData, "PNG", 0, margin, contentWidth, imgHeight);
    }

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
        <Stack bg="#ffffff" color="#000000" m={4} p={8} width="866px" fontSize={"xs"}>
          <Stack as={"header"} gap={4} display={"flex"} flexDir={"row"} fontSize={"xs"}>
            <Image w={24} h={24} src="/photo.jpg" alt="Jhon Lescano" objectFit={"cover"} />
            <Box w={"full"}>
              <Heading as="h2" fontSize="2xl" letterSpacing="wider">
                {name}
              </Heading>
              <Box
                w="100%"
                display={"flex"}
                alignItems="center"
                justifyContent="space-between"
                marginY="3"
              >
                <Box>
                  <Text marginBottom={1}>Dirección: {address}</Text>
                  <Text>
                    Portafolio:{" "}
                    <a
                      href={website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      {website}
                    </a>
                  </Text>
                </Box>
                <Box>
                  <Text marginBottom={1}>
                    Email:{" "}
                    <a
                      href={`mailto:${email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "blue", textDecoration: "underline" }}
                    >
                      {email}
                    </a>
                  </Text>
                  <Text>Móvil: {phone}</Text>
                </Box>
              </Box>
            </Box>
          </Stack>
          <Box>
            <H3 content="Resumen" />
            <Text textAlign={"justify"}>{summary}</Text>
          </Box>
          <Box>
            <H3 content="Formación académica" />
            {educations.map(({ institution, area, startDate, endDate, address }) => (
              <Stack key={institution} gap={0}>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                  <H4 content={institution} />
                  <Text>{address}</Text>
                </HStack>
                <HStack justifyContent={"space-between"} alignItems={"center"}>
                  <Text>{area}</Text>
                  <TimeSpan endDate={endDate} startDate={startDate} />
                </HStack>
              </Stack>
            ))}
          </Box>
          <Box>
            <H3 content="Habilidades" />
            <UnorderedList listStyleType={"none"}>
              <ListItem>
                <TitleItem>- Lenguajes: </TitleItem>
                {programingLanguages.map((language, indexLanguage) => (
                  <span key={language}>
                    {language}
                    {indexLanguage === programingLanguages.length - 1 ? "" : ", "}
                  </span>
                ))}
              </ListItem>
              <ListItem>
                <TitleItem>- Frameworks: </TitleItem>
                {techStacks
                  .filter((stack) => stack.keywords?.includes("framework"))
                  .map((stack) => stack.name)
                  .join(", ")}
              </ListItem>
              <ListItem>
                <TitleItem>- Herramientas: </TitleItem>
                {techStacks
                  .filter((stack) => stack.keywords?.includes("tools"))
                  .map((stack) => stack.name)
                  .join(", ")}
              </ListItem>
              <ListItem>
                <TitleItem>- Plataformas: </TitleItem>
                {techStacks
                  .filter((stack) => stack.keywords?.includes("platform"))
                  .map((stack) => stack.name)
                  .join(", ")}
              </ListItem>
              <ListItem>
                <TitleItem>- Habilidades blandas: </TitleItem>
                {qualifications.map((qualification, indexQualification) => (
                  <span key={qualification.name}>
                    {qualification.name}
                    {indexQualification === qualifications.length - 1 ? "" : ", "}
                  </span>
                ))}
              </ListItem>
            </UnorderedList>
          </Box>
          <Box>
            <H3 content="Experiencia" />
            {works.map(({ company, position, startDate, endDate, summary, highlights }) => (
              <Stack key={company} marginBottom={2}>
                <HStack justifyContent={"space-between"} alignItems={"start"}>
                  <Box>
                    <H4 content={company} />
                    <Text>{position}</Text>
                  </Box>
                  <TimeSpan endDate={endDate} startDate={startDate} />
                </HStack>
                <Box ml={8}>
                  <Text marginY="1">{summary}</Text>
                  <UnorderedList ml={12} listStyleType={"none"}>
                    {highlights.map((highlight) => (
                      <ListItem key={highlight}>- {highlight}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Stack>
            ))}
          </Box>
          <Box>
            <H3 content="Proyectos" />
            {personalProjects.map(({ heading, summary, highlights }) => (
              <Stack key={heading} marginBottom={2}>
                <H4 content={heading} />
                <Box ml={8}>
                  <Text marginY="1">{summary}</Text>
                  <UnorderedList ml={12} listStyleType={"none"}>
                    {highlights.map((highlight) => (
                      <ListItem key={highlight}>- {highlight}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Stack>
            ))}
          </Box>
          <Box>
            <H3 content="Certificados" />
            {certificates.map(({ name, date, learning, issuer }) => (
              <Stack key={name} marginBottom={2}>
                <HStack justifyContent={"space-between"} alignItems={"start"}>
                  <Box>
                    <H4 content={name} />
                    <Text display={"inline"} ml={1} fontWeight="semibold">
                      ({issuer})
                    </Text>
                  </Box>
                  <TimeSpan startDate={date} />
                </HStack>
                <Box ml={8}>
                  <UnorderedList listStyleType={"none"}>
                    {learning.map((highlight) => (
                      <ListItem key={highlight}>- {highlight}</ListItem>
                    ))}
                  </UnorderedList>
                </Box>
              </Stack>
            ))}
          </Box>
          <Box>
            <H3 content="Idiomas" />
            {naturalLanguages.map(({ language, fluency, points }) => (
              <HStack key={language} justifyContent="space-between">
                <Text>{language}</Text>
                <HStack>
                  <Text>{fluency}</Text>
                  <Box>
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
      </Center>
    </Layout>
  );
};

export default Curriculum;
