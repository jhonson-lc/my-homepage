import { SearchIcon } from "@chakra-ui/icons";
import { Stack, Image, HStack, Input, Box } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import React from "react";
import Paragraph from "work/components/Paragraph";

interface Props {
  session: any;
}

const Profile: React.FC<Props> = ({ session }) => {
  console.log(session);
  const [name, setName] = React.useState<string>("");
  return (
    <Stack>
      <Stack
        align="center"
        direction={{ base: "column", sm: "row" }}
        gap={6}
        justifyContent="space-between"
        w="full"
      >
        <Stack
          alignItems={{ base: "center", md: "start" }}
          maxW={{ base: "100%", md: "50%" }}
          order={{ base: "2", sm: "0" }}
          pos="relative"
          spacing={8}
        >
          <Paragraph>I hope to help you with great articles</Paragraph>
          <Stack w="full">
            <HStack bg="hover" maxW={500} p={4} rounded="40px" w="full">
              <Input
                fontSize={16}
                placeholder="Search posts"
                type="text"
                value={name}
                variant="unstyled"
                onChange={(e) => setName(e.target.value)}
              />
              <SearchIcon />
            </HStack>
          </Stack>
        </Stack>
        <Box pr={{ base: 0, md: 100 }}>
          <Image h={400} src="/blog.svg" w="full" />
        </Box>
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
