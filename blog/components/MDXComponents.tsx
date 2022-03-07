import {Heading, HeadingProps, LinkProps, Text} from "@chakra-ui/react";

import Button from "../../ui/controls/Button/Button";

const MDXComponents = {
  Title: (props: HeadingProps) => (
    <Heading style={{color: "heading"}} {...props} />
  ),
  Link: (props: LinkProps) => <Button href="/blog" label="Volver" {...props} />,
  p: ({children}) => (
    <Text align="justify" color="paragraph" fontSize={16} fontWeight={300}>
      {children}
    </Text>
  ),
};

export default MDXComponents;
