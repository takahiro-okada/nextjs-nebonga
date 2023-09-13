import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_URL || 'http://localhost:10063/graphql',
  cache: new InMemoryCache(),
});

export default apolloClient;