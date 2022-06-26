import { Grid, Heading, Stack, Text, Image, HStack } from "@chakra-ui/react";
import { signIn, getProviders, getSession } from "next-auth/react";
import React from "react";
import Button from "ui/controls/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

interface Props {
  providers: any;
  session: any;
}

const SignIn: React.FC<Props> = ({ session }) => {
  return (
    <Stack as={Grid} gap={8} h="85vh" placeItems="center" w="full">
      <Heading>Iniciar Session</Heading>
      <Button
        icon={<BsGithub />}
        text="GitHub"
        onClick={() => signIn("github")}
      />
      <Button
        icon={<FcGoogle />}
        text="Google"
        onClick={() => signIn("google")}
      />
      <Button text="Facebook" />
      <Button text="Instagram" />
    </Stack>
  );
};

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);
  return {
    props: { providers, session },
  };
}
export default SignIn;
