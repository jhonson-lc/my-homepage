import React from "react";
import { Document, Page, Text, View, StyleSheet, Link, Image } from "@react-pdf/renderer";
import { WorkType, EducationType, NaturalLanguageType, ProjectType } from "../app/types";

// Estilos optimizados para ATS y similares al diseño original
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 10,
    fontFamily: "Helvetica",
    backgroundColor: "#ffffff",
    color: "#000000",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    gap: 15,
  },
  profileImage: {
    width: 60,
    height: 70,
  },
  headerContent: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  contactColumn: {
    flex: 1,
  },
  contactText: {
    fontSize: 9,
    marginBottom: 3,
  },
  link: {
    color: "#0066cc",
    textDecoration: "underline",
  },
  section: {
    marginBottom: 12,
    borderTop: "0.5 solid #808080",
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    marginVertical: 6,
    paddingVertical: 2,
  },
  text: {
    fontSize: 9,
    textAlign: "justify",
    lineHeight: 1.4,
  },
  subsectionContainer: {
    marginBottom: 4,
  },
  subsectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  subsectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
  },
  subsectionDate: {
    fontSize: 8,
    color: "#333333",
  },
  subsectionDateLocation: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 2.8,
  },
  subsubsectionRow: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 2,
  },
  subsectionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  subsectionText: {
    fontSize: 9,
  },
  contentIndent: {
    marginLeft: 15,
  },
  list: {
    marginLeft: 25,
  },
  listItem: {
    fontSize: 9,
    marginBottom: 2,
    lineHeight: 1.3,
  },
  skillsList: {
    marginLeft: 0,
  },
  skillItem: {
    fontSize: 9,
    marginBottom: 3,
    lineHeight: 1.3,
  },
  bold: {
    fontWeight: "bold",
  },
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  stars: {
    fontSize: 9,
  },
});

interface ResumePDFProps {
  data: any;
}

const ResumePDF: React.FC<ResumePDFProps> = ({ data }) => {
  const { name, email, phone, website, location, summary } = data.basics;
  const { address } = location;
  const works: WorkType[] = data.work;
  const educations: EducationType[] = data.education;
  const programingLanguages: string[] = data.programmingLanguages;
  const naturalLanguages: NaturalLanguageType[] = data.languages;
  const techStacks = data.skills;
  const personalProjects: ProjectType[] = data.projects;
  const qualifications = data.interests;
  const certificates = data.certificates;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <Image src="/photo.jpg" style={styles.profileImage} />
          <View style={styles.headerContent}>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.contactInfo}>
              <View style={styles.contactColumn}>
                <Text style={styles.contactText}>Dirección: {address}</Text>
                <Text style={styles.contactText}>
                  LinkedIn:{" "}
                  <Link src={website} style={styles.link}>
                    {website}
                  </Link>
                </Text>
              </View>
              <View style={styles.contactColumn}>
                <Text style={styles.contactText}>
                  Email:{" "}
                  <Link src={`mailto:${email}`} style={styles.link}>
                    {email}
                  </Link>
                </Text>
                <Text style={styles.contactText}>Móvil: {phone}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* RESUMEN */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumen</Text>
          <Text style={styles.text}>{summary}</Text>
        </View>

        {/* FORMACIÓN ACADÉMICA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formación académica</Text>
          {educations.map((edu) => (
            <View key={edu.institution} style={styles.subsectionContainer}>
              <View style={styles.subsectionHeader}>
                <Text style={styles.subsectionTitle}>{edu.institution}</Text>
                <Text style={styles.subsectionDateLocation}>{edu.address}</Text>
              </View>
              <View style={styles.subsectionRow}>
                <Text style={styles.subsectionText}>{edu.area}</Text>
                <Text style={styles.subsectionDate}>
                  {edu.startDate} - {edu.endDate}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* HABILIDADES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <View style={styles.skillsList}>
            <Text style={styles.skillItem}>
              <Text style={styles.bold}>- Lenguajes: </Text>
              {programingLanguages.join(", ")}
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.bold}>- Frameworks: </Text>
              {techStacks
                .filter((stack) => stack.keywords?.includes("framework"))
                .map((stack) => stack.name)
                .join(", ")}
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.bold}>- Herramientas: </Text>
              {techStacks
                .filter((stack) => stack.keywords?.includes("tools"))
                .map((stack) => stack.name)
                .join(", ")}
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.bold}>- Plataformas: </Text>
              {techStacks
                .filter((stack) => stack.keywords?.includes("platform"))
                .map((stack) => stack.name)
                .join(", ")}
            </Text>
            <Text style={styles.skillItem}>
              <Text style={styles.bold}>- Habilidades blandas: </Text>
              {qualifications.map((q) => q.name).join(", ")}
            </Text>
          </View>
        </View>

        {/* EXPERIENCIA */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiencia</Text>
          {works.map((work) => (
            <View key={work.company} style={styles.subsectionContainer}>
              <View style={styles.subsectionHeader}>
                <View>
                  <Text style={styles.subsectionTitle}>{work.company}</Text>
                  <Text style={styles.subsectionText}>{work.position}</Text>
                </View>

                <View style={styles.subsubsectionRow}>
                  <Text style={styles.subsectionDateLocation}>
                    {work.location.city}, {work.location.region}
                  </Text>
                  <Text style={styles.subsectionDate}>
                    {work.startDate} - {work.endDate}
                  </Text>
                </View>
              </View>
              <View style={styles.contentIndent}>
                <Text style={styles.text}>{work.summary}</Text>
                <View style={styles.list}>
                  {work.highlights.map((highlight, idx) => (
                    <Text key={idx} style={styles.listItem}>
                      - {highlight}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* PROYECTOS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Proyectos</Text>
          {personalProjects.map((project) => (
            <View key={project.heading} style={styles.subsectionContainer}>
              <Text style={styles.subsectionTitle}>{project.heading}</Text>
              <View style={styles.contentIndent}>
                <Text style={styles.text}>{project.summary}</Text>
                <View style={styles.list}>
                  {project.highlights.map((highlight, idx) => (
                    <Text key={idx} style={styles.listItem}>
                      - {highlight}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* CERTIFICADOS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Certificados</Text>
          {certificates.map((cert) => (
            <View key={cert.name} style={styles.subsectionContainer}>
              <View style={styles.subsectionHeader}>
                <View>
                  <Text style={styles.subsectionTitle}>
                    {cert.name} ({cert.issuer})
                  </Text>
                </View>
                <Text style={styles.subsectionDate}>{cert.date}</Text>
              </View>
              <View style={styles.contentIndent}>
                <View style={styles.list}>
                  {cert.learning.map((item, idx) => (
                    <Text key={idx} style={styles.listItem}>
                      - {item}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* IDIOMAS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Idiomas</Text>
          {naturalLanguages.map((lang) => (
            <View key={lang.language} style={styles.languageRow}>
              <Text style={styles.subsectionText}>{lang.language}</Text>
              <Text style={styles.subsectionText}>{lang.fluency}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
