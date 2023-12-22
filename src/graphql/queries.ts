export const GET_POSTS = `
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
`

export const GET_WORKS = `
  query GET_WORKS {
    works {
      nodes {
        date
        slug
        title
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }
`
