import { Grid, Text, Heading, HStack, Stack } from "@chakra-ui/react";
import { signIn, getProviders, getSession } from "next-auth/react";
import React from "react";
import Button from "ui/controls/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsGithub } from "react-icons/bs";
import SignUp from "session/screens/SignUp";

interface Props {
  providers: any;
  session: any;
}

const SignIn: React.FC<Props> = () => {
  const [page, setPage] = React.useState<string>("signin");

  if (page === "signup") return <SignUp onClick={() => setPage("signin")} />;
  return (
    <Stack as={Grid} gap={8} h="85vh" placeItems="center" w="full">
      <Stack gap={4}>
        <Heading textAlign={"center"}>Welcome Back!</Heading>
        <Button
          icon={<BsGithub />}
          text="Sign in with GitHub"
          onClick={() =>
            signIn("github", {
              callbackUrl: `${window.location.origin}/profile`,
            })
          }
        />
        <Button
          icon={<FcGoogle />}
          text="Sign in with Google"
          onClick={() =>
            signIn("google", {
              callbackUrl: `${window.location.origin}/profile`,
            })
          }
        />
        <Button
          icon={<BsFacebook color="#1778F2" />}
          text="Sign up with Facebook"
          onClick={() =>
            signIn("facebook", {
              callbackUrl: `${window.location.origin}/profile`,
            })
          }
        />
        <HStack>
          <Text>No tienes cuenta?</Text>
          <Text
            _hover={{ textDecoration: "underline" }}
            color="primary"
            cursor="pointer"
            fontWeight={700}
            onClick={() => setPage("signup")}
          >
            Crear una cuenta
          </Text>
        </HStack>
      </Stack>
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
