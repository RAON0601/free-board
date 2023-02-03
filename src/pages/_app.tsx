import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { type AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'https://backendonline.codebootcamp.co.kr/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}
