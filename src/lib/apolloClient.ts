import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://hirokawasaki-works.com/graphql'

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: NEXT_PUBLIC_GRAPHQL_URL,
    }),
  })
})
