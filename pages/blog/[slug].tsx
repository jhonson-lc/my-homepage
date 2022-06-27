import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { getClient, sanityClient } from "lib/sanity-server";
import { postQuery, postSlugsQuery } from "lib/queries";
import { Post } from "blog/types";
import { mdxToHtml } from "utils/readingMdx";
import components from "blog/components/MDXComponents";
import { MDXRemote } from "next-mdx-remote";
import {
  Container,
  Text,
  Stack,
  Box,
  Textarea,
  Heading,
  Avatar,
  HStack,
  useToast,
  Divider,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Spinner,
} from "@chakra-ui/react";
import { serialize } from "next-mdx-remote/serialize";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import FormControl from "ui/form/FormControl";
import Button from "ui/controls/Button/Button";
import { formatDistance } from "date-fns";

import BlogLayout from "../../app/layouts/BlogLayout";

interface Props {
  post: Post;
  source: any;
}

const SingleBlog: React.FC<Props> = ({ post, source }) => {
  const { data: session } = useSession();
  const [open, setOpen] = React.useState<boolean>(true);

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const toast = useToast();

  const onSubmit = async (values: any) => {
    setLoading(true);
    if (!session) {
      return toast({
        title: "You must be logged in to comment",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    const data = {
      _id: post._id,
      name: session.user.name,
      email: session.user.email,
      comment: values.comment,
    };
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then(() => {
        reset();
        setOpen(true);
        setSubmitted(true);
        setLoading(false);
      })
      .catch(() => {
        setSubmitted(false);
      });
  };
  return (
    <BlogLayout post={post}>
      <Container maxW="container.xl">
        <MDXRemote
          {...source}
          components={
            {
              ...components,
            } as any
          }
        />
      </Container>
      <Stack borderTopColor="red" borderTopWidth={4}>
        <Heading>Comments</Heading>
        {post.comments.map((comment) => {
          return (
            <Box key={comment._id}>
              <Stack>
                <HStack justify="space-between">
                  <Text fontWeight={500}>{comment.name}</Text>
                  <Text>
                    {formatDistance(Date.now(), new Date(comment._createdAt), {
                      addSuffix: true,
                    })}
                  </Text>
                </HStack>
                <Text pl={4}>{comment.comment}</Text>
                <Divider />
              </Stack>
            </Box>
          );
        })}
        {post.comments.length === 0 && (
          <Text color="paragraph" fontSize={18} textAlign="center">
            No comments
          </Text>
        )}
      </Stack>
      <Stack gap={4}>
        <Box>
          <Text color="red">Enjoyed this article?</Text>
          <Heading>Leave a comment below!</Heading>
        </Box>
        {submitted && open && (
          <Alert
            alignItems="center"
            flexDirection="column"
            height="200px"
            justifyContent="center"
            status="success"
            textAlign="center"
            variant="subtle"
          >
            <CloseButton
              alignSelf="flex-end"
              position="relative"
              right={-1}
              top={-1}
              onClick={() => {
                setSubmitted(false);
                setOpen(false);
              }}
            />
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle fontSize="lg" mb={1} mt={4}>
              Comment submitted!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Thank you for your comment. Once it is approved, it will appear
              below!
            </AlertDescription>
          </Alert>
        )}
        {loading ? (
          <Stack alignItems="center" w="full">
            <Spinner size="xl" />
          </Stack>
        ) : (
          !submitted && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                alignItems="start"
                border="1px solid black"
                borderColor="hover"
                boxShadow="lg"
                direction="column"
                p={4}
                rounded="10px"
              >
                {session && (
                  <HStack>
                    <Avatar src={session.user.image} />
                    <Text>{session.user.name}</Text>
                  </HStack>
                )}
                <FormControl
                  isRequired
                  error={errors.comment && "Este campo es requerido"}
                  name="comment"
                >
                  <Textarea
                    {...register("comment", {
                      required: true,
                      validate: (value) => value !== "",
                    })}
                    placeholder="Qué opinas de este artículo?"
                    rows={5}
                    variant="unstyled"
                  />
                </FormControl>
                <HStack alignSelf="end">
                  <Text
                    _hover={{ textDecoration: "underline" }}
                    cursor="pointer"
                    onClick={() => reset()}
                  >
                    Cancel
                  </Text>
                  <Button text="Send" type="submit" />
                </HStack>
              </Stack>
            </form>
          )
        )}
      </Stack>
    </BlogLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await sanityClient.fetch(postSlugsQuery);
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const { post } = await getClient(preview).fetch(postQuery, {
    slug: params.slug,
  });
  if (!post) {
    return { notFound: true };
  }
  const p = await serialize(post.content);
  const { readingTime } = await mdxToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        readingTime,
      },
      source: p,
    },
    revalidate: 1,
  };
};

export default SingleBlog;
