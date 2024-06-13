import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  HStack,
  Alert,
  AlertIcon,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import Paragraph from "work/components/Paragraph";

type Email = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const MESSAGES = {
  error: "Something went wrong. Please try again.",
  success: "Your message has been sent successfully.",
  info: "Sending...",
};

export default function ContactForm() {
  const [email, setEmail] = useState<Email>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "info" | "error" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEmail({
      ...email,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.name === "" || email.email === "" || email.subject === "" || email.message === "") {
      setStatus("error");
      return;
    }

    try {
      setStatus("info");
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });

      if (response.ok) {
        setEmail({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setStatus("success");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <Box maxW="xl" pt={16} mx="auto">
      {status !== "idle" && (
        <Alert status={status} my={6}>
          {status === "info" ? <Spinner size="sm" mr={2} /> : <AlertIcon />}
          {MESSAGES[status]}
        </Alert>
      )}
      <Box fontSize="2xl" fontWeight="bold" mb={4}>
        Send me a email
      </Box>
      <Paragraph size={16} line={2}>
        Have a question or just want to say hello? Fill out the form and we'll get back to you as
        soon as possible.
      </Paragraph>
      <form onSubmit={handleSubmit}>
        <HStack alignItems={"center"} justifyContent={"center"} my={4}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              placeholder="Enter your name"
              value={email.name}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email.email}
              onChange={(e) => handleChange(e)}
            />
          </FormControl>
        </HStack>
        <FormControl mb={4}>
          <FormLabel htmlFor="subject">Subject</FormLabel>
          <Input
            id="subject"
            type="subject"
            placeholder="Enter your subject"
            value={email.subject}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea
            id="message"
            placeholder="Write your message here..."
            minHeight="120px"
            value={email.message}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <Button
          bg="primary"
          color="background"
          type="submit"
          width="full"
          _hover={{
            bg: "experience",
          }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
