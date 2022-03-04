import {
  useToast,
  Text,
  Button,
  VStack,
  Textarea,
  Stack,
} from "@chakra-ui/react";

import FormControl from "../components/FormControl";
import InputInformation from "../components/InputInformation";

import Layout from "../../app/layouts/ArticleLayout";
import Section from "../../components/Section";

import { BsPerson } from "react-icons/bs";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";

export default function ContactScreen() {
  const toast = useToast();
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Correo Enviado!",
      description: "Se envió su correo correctamente",
      status: "success",
      duration: 8000,
      isClosable: true,
    });
  };
  return (
    <Layout title="Contact">
      <Section title="Contact">
        <Stack spacing={5}>
          <Text color="secondary">Fill up the form below to contact</Text>
          <Stack
            spacing={3}
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <InputInformation icon={<MdPhone />}>
              +593 98 165 7629
            </InputInformation>
            <InputInformation icon={<MdEmail />}>
              antibots@gmail.com
            </InputInformation>
            <InputInformation icon={<MdLocationOn />}>
              Quito, Ecuador
            </InputInformation>
          </Stack>
        </Stack>
        <Stack w="100%" justifyContent="center" direction="row">
          <Stack p={8} w={400} bg="footer" borderRadius="lg">
            <VStack justifyContent="center">
              <form onSubmit={handleSubmit}>
                <FormControl
                  help="Ej: John"
                  label="Your name"
                  icon={BsPerson}
                />
                <FormControl
                  help="Ej: johndoe@mail.com"
                  label="Email"
                  icon={MdOutlineEmail}
                />
                <FormControl label="Message" help="Ej: Me gusta!">
                  <Textarea
                    p={2}
                    borderColor="primary"
                    rows={5}
                    resize="none"
                  />
                </FormControl>
                <Button
                  variant="solid"
                  bg="primary"
                  type="submit"
                  color="background"
                  _hover={{}}
                >
                  Send Message
                </Button>
              </form>
            </VStack>
          </Stack>
        </Stack>
      </Section>
    </Layout>
  );
}
