import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || ' https://hirokawasaki-works.com/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;