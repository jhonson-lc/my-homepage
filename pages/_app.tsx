import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../ui/layout';
import Chakra from '../ui/chakra';
import { AnimatePresence } from 'framer-motion';
import { NextPage } from 'next';
import Fonts from '../ui/fonts';

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
