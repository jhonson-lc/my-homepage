import React from "react";
import { Box, Container } from "@chakra-ui/react";

import NavBar from "../../components/header/NavBar";
import Footer from "../../components/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <Box as="main" pt={10}>
      <NavBar />

      <Container maxW="container.sm" pt={20}>
        {children}
      </Container>

      <Footer />
    </Box>
  );
};

export default Layout;
