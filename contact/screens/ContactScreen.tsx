import { Text, Stack, Box, Heading } from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import Avatar from "ui/feedback/Avatar";

import InputInformation from "../components/InputInformation";
import Layout from "../../app/layouts/Layout";
import ContactForm from "contact/components/ContactForm";

export default function ContactScreen() {
  return (
    <Layout description="Contact me to work together" title="Contact - Jhon Lescano">
      <Stack
        align="center"
        direction={{ base: "column", sm: "row" }}
        gap={6}
        justifyContent="space-between"
        w="full"
      >
        <Stack spacing={5}>
          <Heading
            color="heading"
            fontSize={{ base: "38px" }}
            fontWeight={500}
            variant="title-section"
          >
            Contact
          </Heading>
          <Text color="secondary">Fill up the form below to contact</Text>
          <Stack alignItems="flex-start" direction="column" justifyContent="flex-start" spacing={3}>
            <InputInformation icon={<MdPhone />}>+593 98 165 7629</InputInformation>
            <InputInformation icon={<MdEmail />}>antibots@gmail.com</InputInformation>
            <InputInformation icon={<MdLocationOn />}>Quito, Ecuador</InputInformation>
          </Stack>
        </Stack>
        <Box pr={{ base: 0, md: 12, lg: 100 }}>
          <Avatar />
        </Box>
      </Stack>
      <ContactForm />
    </Layout>
  );
}
