import type { AppProps } from "next/app";
import Layout from "../app/layouts/MainLayout";
import Chakra from "../ui/structure/chakra";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import Fonts from "../lib/fonts";

const App: NextPage<AppProps> = ({ Component, pageProps, router }) => {
  return (
    <Chakra>
      <Layout router={router}>
        <Fonts />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
};

export default App;
