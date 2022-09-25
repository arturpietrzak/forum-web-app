import type { AppProps } from 'next/app';

import { Layout } from '../components/layouts/Layout/Layout';
import '../styles/_reset.scss';
import '../styles/globals.scss';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;