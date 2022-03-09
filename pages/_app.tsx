import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";

import Layout from "../app/layouts/IndexLayout";
import Chakra from "../ui/structure/chakra";
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
