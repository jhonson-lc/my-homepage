import {
  Stack,
  Text,
  HStack,
  Input,
  Avatar,
  Box,
  useToast,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { getSession, signOut } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "ui/controls/Button/Button";
import FormControl from "ui/form/FormControl";
import Paragraph from "work/components/Paragraph";
import { FiLogOut } from "react-icons/fi";
import { useRouter } from "next/router";

interface Props {
  session: any;
}

const Profile: React.FC<Props> = ({ session }) => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const [name, setName] = React.useState<string>(session.user.name);
  const toast = useToast();
  const router = useRouter();

  const onSubmit = (values: any) => {
    const data = {
      id: session.userId,
      name: values.name,
    };
    fetch("/api/updateUser", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      toast({
        title: "Success",
        description: "Profile updated",
        status: "success",
        position: "top-right",
        duration: 9000,
        isClosable: true,
      });
      router.reload();
    });
  };
  return (
    <Stack
      align="start"
      direction={{ base: "column", sm: "row" }}
      gap={6}
      justifyContent="space-between"
      w="full"
    >
      <Stack order={{ base: "2", sm: "0" }} pos="relative" spacing={8} w="full">
        <Paragraph>Your profile</Paragraph>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Text color="paragraph" fontSize={16} pl={4}>
            Name
          </Text>
          <FormControl
            error={errors.name && "Este campo es requerido"}
            name="name"
          >
            <HStack bg="hover" maxW={500} px={4} py={6} rounded="10px" w="full">
              <Input
                fontSize={16}
                placeholder="Name"
                {...register("name", {
                  required: true,
                })}
                type="text"
                value={name}
                variant="unstyled"
                onChange={(e) => setName(e.target.value)}
              />
            </HStack>
          </FormControl>
          <Text color="paragraph" fontSize={16} pl={4}>
            Email
          </Text>
          <FormControl>
            <HStack bg="hover" maxW={500} px={4} py={6} rounded="10px" w="full">
              <Input
                isReadOnly
                cursor="not-allowed"
                fontSize={16}
                type="text"
                value={session.user.email}
                variant="unstyled"
              />
            </HStack>
          </FormControl>
          <Box pt={8}>
            <Button text="Save changes" type="submit" />
          </Box>
        </form>
      </Stack>
      <Stack gap={12} pr={{ base: 0, md: 100 }}>
        <Button icon={<FiLogOut />} text="logout" onClick={() => signOut()} />
        <Avatar h={200} src={session.user.image} w={200} />
      </Stack>
    </Stack>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};

export default Profile;
