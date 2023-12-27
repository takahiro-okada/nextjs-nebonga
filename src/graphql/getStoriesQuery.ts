const GET_STORIES = `query GET_STORIES {
  posts {
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
}`

export default GET_STORIES
