import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";

import Chakra from "../ui/structure/chakra";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Chakra cookies={pageProps.cookies}>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>
    </Chakra>
  );
};

export default App;
