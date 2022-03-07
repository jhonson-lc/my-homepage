import {
  useToast,
  Text,
  Button,
  VStack,
  Textarea,
  Stack,
} from "@chakra-ui/react";
import {BsPerson} from "react-icons/bs";
import {MdPhone, MdEmail, MdLocationOn, MdOutlineEmail} from "react-icons/md";

import FormControl from "../components/FormControl";
import InputInformation from "../components/InputInformation";
import Layout from "../../app/layouts/HeadLayout";
import Section from "../../components/Section";

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
            alignItems="flex-start"
            direction="column"
            justifyContent="flex-start"
            spacing={3}
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
        <Stack direction="row" justifyContent="center" w="100%">
          <Stack bg="footer" borderRadius="lg" p={8} w={400}>
            <VStack justifyContent="center">
              <form onSubmit={handleSubmit}>
                <FormControl
                  help="Ej: John"
                  icon={BsPerson}
                  label="Your name"
                />
                <FormControl
                  help="Ej: johndoe@mail.com"
                  icon={MdOutlineEmail}
                  label="Email"
                />
                <FormControl help="Ej: Me gusta!" label="Message">
                  <Textarea
                    borderColor="primary"
                    p={2}
                    resize="none"
                    rows={5}
                  />
                </FormControl>
                <Button
                  _hover={{}}
                  bg="primary"
                  color="background"
                  type="submit"
                  variant="solid"
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
