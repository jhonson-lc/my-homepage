import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";

import Chakra from "../ui/structure/chakra";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <Chakra>
      <SessionProvider refetchInterval={0} session={pageProps.session}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Component {...pageProps} />
        </AnimatePresence>
      </SessionProvider>
    </Chakra>
  );
};

export default App;
