const GET_WORKS = `query GET_WORKS {
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
}`

export default GET_WORKS
