import type { NextPage } from "next";
import { Box, Code, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Skills from "components/Skills";
import Button from "components/Button";
import ArrowMore from "components/ArrowMore";
import resume from "../data/resume.json";

import Section from "../components/Section";
import Layout from "../app/layouts/Layout";
import Avatar from "../ui/feedback/Avatar";
import ItemWork from "../work/components/GridItemWork";
import Paragraph from "../work/components/Paragraph";
import CommandMenu from "components/CommandMenu";
import works from "work/data/works";
import Experience from "components/Experience";
import Mail from "ui/icons/Mail";
import Phone from "ui/icons/Phone";
import WorldMap from "ui/icons/WorldMap";
import { SocialIcon } from "work/types";
import { GitHubIcon as GitHub, LinkedInIcon as LinkedIn, XIcon as X } from "components/CommandMenu";
import InstagramIcon from "ui/icons/Instagram";
import Certification from "work/sections/Certification";

const Instagram = InstagramIcon;

const SOCIAL_ICONS: SocialIcon = {
  GitHub,
  LinkedIn,
  X,
  Instagram,
};

const IndexPage: NextPage = () => {
  const { name, location, profiles, phone, email } = resume.basics;
  const { city, region } = location;

  return (
    <Layout>
      <Box
        pos={"fixed"}
        bottom={0}
        left={0}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        w="full"
        py={2}
        fontSize={"xs"}
        borderTop={"1px"}
        bg="background"
        color="primary"
        zIndex={9999}
        borderColor={"blackAlpha.300"}
      >
        Pulsa <Code mx={1}>Cmd</Code> + <Code mx={1}>K</Code> para abrir la paleta de comandos.
      </Box>
      <CommandMenu />
      <Stack spacing={10}>
        <Stack
          align="center"
          direction={{ base: "column", sm: "row" }}
          gap={6}
          justifyContent="space-between"
          w="full"
        >
          <Stack
            alignItems={{ base: "center", md: "start" }}
            maxW={{ base: "100%", md: "50%" }}
            order={{ base: "2", sm: "0" }}
            pos="relative"
            spacing={2}
          >
            <Text
              align={{ base: "center", md: "left" }}
              color="primary"
              fontSize={16}
              fontWeight={400}
            >
              Software Engineer | React | Next.js | Java | SQL{" "}
            </Text>
            <Stack mb={6}>
              <Box display={"flex"} alignItems={"center"} gap={2} fontSize={"xs"}>
                <WorldMap />
                {city}, {region}
              </Box>
              <Box display={"flex"} gap={1}>
                <Link
                  href={`mailto:${email}`}
                  title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="paragraph"
                  display={"inline-flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  border={"1px"}
                  borderColor={"icon"}
                  borderRadius={"md"}
                  p={2}
                  transition={"all 0.3s ease"}
                  _hover={{
                    bg: "icon",
                    color: "primary",
                  }}
                  height={6}
                  width={6}
                >
                  <Mail size={16} />
                </Link>
                <Link
                  href={`tel:${phone}`}
                  title={`Llamar por teléfono a ${name} al número ${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="paragraph"
                  display={"inline-flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  border={"1px"}
                  borderColor={"icon"}
                  borderRadius={"md"}
                  p={2}
                  transition={"all 0.3s ease"}
                  _hover={{
                    bg: "icon",
                    color: "primary",
                  }}
                  height={6}
                  width={6}
                >
                  <Phone size={16} />
                </Link>
                {profiles.map(({ network, url }) => {
                  const Icon = SOCIAL_ICONS[network];

                  return (
                    <Link
                      href={url}
                      key={url}
                      title={`Visitar el perfil de ${name} en ${network}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="paragraph"
                      display={"inline-flex"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      border={"1px"}
                      borderColor={"icon"}
                      borderRadius={"md"}
                      p={1}
                      transition={"all 0.3s ease"}
                      _hover={{
                        bg: "icon",
                        color: "primary",
                      }}
                      height={6}
                      width={6}
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </Box>
            </Stack>
            <Paragraph>
              <div className="paragraph-home">
                Building innovative software, shaping the digital world through quality software.
              </div>
            </Paragraph>
            <Stack
              alignItems={{ base: "center", md: "end" }}
              flexDirection={{ base: "column", md: "row" }}
              gap={6}
              pt={6}
            >
              <Button href="/contact" text="Send email" />
            </Stack>
          </Stack>
          <Box pr={{ base: 0, md: 12, lg: 100 }}>
            <Avatar />
          </Box>
        </Stack>
        <ArrowMore href="#projects" text="Read more about Jhon" />
        <Section title="Experience">
          <div id="experience" />
          <Experience />
        </Section>
        <Section title="Certifications">
          <div id="certifications" />
          <Certification />
        </Section>
        <Section hrefB="/work" labelB="VIEW ALL" title="Latest Projects">
          <div id="projects" />
          <SimpleGrid columns={[1, 2]} gridGap={16} w="100%">
            {works.slice(0, 2).map((work, i) => {
              return <ItemWork key={work.id} i={i} work={work} />;
            })}
          </SimpleGrid>
        </Section>
        <Section hrefB="/contact" labelB="SEND MESSAGE" title="Skills">
          <Skills />
        </Section>
        {/* <Section
          hrefB="/blog"
          labelB="SEE THE FULL BLOG"
          subtitle="Join me to suggesting future blogs"
          title="Blog recomendations"
        >
          <SimpleGrid columns={[1, 2, 2]} gap={5} w="100%">
            {posts.slice(0, 2).map((post) => {
              return <ItemPost key={post.slug} post={post} />;
            })}
          </SimpleGrid>
        </Section> */}
      </Stack>
    </Layout>
  );
};

export default IndexPage;
