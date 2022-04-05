import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";

import Layout from "../app/layouts/IndexLayout";
import Chakra from "../ui/structure/chakra";
import Fonts from "../lib/fonts";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Chakra>
      <Layout>
        <Fonts />
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
};

export default App;
