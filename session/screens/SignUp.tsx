import React from "react";
import { Grid, Text, Heading, HStack, Stack } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import Button from "ui/controls/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

interface Props {
  onClick: () => void;
}

const SignUp: React.FC<Props> = ({ onClick }) => {
  return (
    <Stack as={Grid} gap={8} h="85vh" placeItems="center" w="full">
      <Stack gap={4}>
        <Heading textAlign={"center"}>Join!</Heading>
        <Button
          icon={<BsGithub />}
          text="Sign up with GitHub"
          onClick={() => signIn("github")}
        />
        <Button
          icon={<FcGoogle />}
          text="Sign up with Google"
          onClick={() => signIn("google")}
        />
        <Button text="Sign up with Apple" />
        <Button text="Sign up with Facebook" />
        <HStack>
          <Text>Ya tienes una cuenta?</Text>
          <Text
            _hover={{ textDecoration: "underline" }}
            color="blue"
            cursor="pointer"
            fontWeight={600}
            onClick={onClick}
          >
            Iniciar Sesión
          </Text>
        </HStack>
      </Stack>
    </Stack>
  );
};
export default SignUp;
