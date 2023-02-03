import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { type AppProps } from 'next/app';
import '@/styles/globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <>
      <Head>
        <title>테스트</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />;
      </ApolloProvider>
    </>
  );
}
