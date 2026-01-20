import { useState } from "react";
import { Center } from "@chakra-ui/react";
import Button from "ui/controls/Button/Button";
import Layout from "app/layouts/Layout";
import ResumePDF from "../components/resume-pdf";
import data from "../data/resume.json";
import { pdf } from "@react-pdf/renderer";

const Curriculum = () => {
  const [isLoading, setIsLoading] = useState(false);
  const createPDF = async () => {
    try {
      setIsLoading(true);
      const blob = await pdf(<ResumePDF data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "curriculum-Lescano-Jhon.pdf";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al generar PDF:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout
      description="I believe in web development as a powerful communication tool to reflect life projects, communicate ventures and ideas."
      title="Curriculum Vitae - Jhon Lescano"
    >
      <Center display={"flex"} flexDir="column" gap={4} h={"full"} alignItems={"center"}>
        <Button
          text={isLoading ? "Generando PDF..." : "Descargar CV en PDF"}
          onClick={() => createPDF()}
          enabled={isLoading}
        />
      </Center>
    </Layout>
  );
};

export default Curriculum;
