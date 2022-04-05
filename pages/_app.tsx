import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";

import Layout from "../app/layouts/IndexLayout";
import Chakra from "../ui/structure/chakra";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Chakra>
      <Layout>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  );
};

export default App;
