import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      edges {
        node {
          id
          title
          content
          featuredImage {
            node {
              id
              title
              link
            }
          }
        }
      }
    }
  }
`;
