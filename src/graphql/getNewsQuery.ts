const GET_NEWS = `query GET_NEWS {
  newsList {
    edges {
      node {
        id
        content
        title
        slug
        date
        featuredImage {
          node {
            mediaDetails {
              width
              height
            }
            sourceUrl
            altText
          }
        }
      }
    }
  }
}
`

export default GET_NEWS
