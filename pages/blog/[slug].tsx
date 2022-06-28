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
  Divider,
  Stack,
  Box,
  Textarea,
  Avatar,
  HStack,
  Button as ButtonChakra,
  useToast,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Spinner,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Collapse,
} from "@chakra-ui/react";
import { serialize } from "next-mdx-remote/serialize";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import FormControl from "ui/form/FormControl";
import Button from "ui/controls/Button/Button";
import { formatDistance } from "date-fns";
import { ChatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import BlogLayout from "../../app/layouts/BlogLayout";

interface Props {
  post: Post;
  source: any;
}

const SingleBlog: React.FC<Props> = ({ post, source }) => {
  const { data: session } = useSession();
  const [open, setOpen] = React.useState<boolean>(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();
  const [submitted, setSubmitted] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [show, setShow] = React.useState(false);

  const toast = useToast();

  const onSubmit = async (values: any) => {
    if (!session) {
      return toast({
        title: "You must be logged in to comment",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(true);
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

  const router = useRouter();

  const handleClick = () => {
    if (!session) {
      router.push("/auth/signin");
    } else {
      onOpen();
    }
  };

  const handleToggle = () => setShow(!show);
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
      <Stack direction="row" justifyContent={"start"} w="full">
        <IconButton
          ref={btnRef}
          aria-label="Comment"
          icon={<ChatIcon />}
          onClick={() => handleClick()}
        />
      </Stack>
      <Drawer
        finalFocusRef={btnRef}
        isOpen={isOpen}
        placement="right"
        size="sm"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg="background">
          <DrawerCloseButton />
          <DrawerHeader>Comments ({post.comments.length})</DrawerHeader>
          <DrawerBody>
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
                  Thank you for your comment. Once it is approved, it will
                  appear below!
                </AlertDescription>
              </Alert>
            )}
            {loading && session ? (
              <Stack alignItems="center" w="full">
                <Spinner size="xl" />
              </Stack>
            ) : (
              !submitted && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Stack boxShadow="0px 0px 5px rgba(0, 0, 0, 0.1)">
                    <Collapse in={show} startingHeight={90}>
                      <Stack
                        alignItems="start"
                        direction="column"
                        p={4}
                        rounded="10px"
                        onClick={handleToggle}
                      >
                        {session && show && (
                          <AnimatePresence>
                            <HStack
                              animate={{ opacity: 1 }}
                              as={motion.div}
                              exit={{ opacity: 0 }}
                              initial={{ opacity: 0 }}
                            >
                              <Avatar src={session.user.image} />
                              <Text>{session.user.name}</Text>
                            </HStack>
                          </AnimatePresence>
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
                            fontSize={14}
                            fontWeight={500}
                            lineHeight={7}
                            overflowY="auto"
                            placeholder="Qué opinas de este artículo?"
                            resize={"none"}
                            rows={3}
                            variant="unstyled"
                          />
                        </FormControl>
                        <HStack justify="end" w="full">
                          <ButtonChakra
                            variant="link"
                            onClick={() => {
                              handleToggle();
                              reset();
                            }}
                          >
                            Cancel
                          </ButtonChakra>
                          <Button
                            bg="whatsapp.500"
                            text="Send"
                            type="submit"
                            x={4}
                            y={2}
                          />
                        </HStack>
                      </Stack>
                    </Collapse>
                  </Stack>
                </form>
              )
            )}
            <Divider borderColor="primary" mt={8} />
            <Stack mt={8}>
              {post.comments.map((comment) => {
                return (
                  <Box key={comment._id}>
                    <Stack>
                      <HStack justify="start">
                        <Avatar />
                        <VStack align="start" spacing={0}>
                          <Text fontWeight={500}>{comment.name}</Text>
                          <Text fontSize={12}>
                            {formatDistance(
                              Date.now(),
                              new Date(comment._createdAt),
                              {
                                addSuffix: true,
                              },
                            )}
                          </Text>
                        </VStack>
                      </HStack>
                      <Text fontSize={14} fontWeight={400}>
                        {comment.comment}
                      </Text>
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
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
