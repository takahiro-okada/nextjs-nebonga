type Work = {
  node: {
    title: string
    slug: string
    content: string
    featuredImage: {
      node: {
        sourceUrl: string
        altText: string
        mediaDetails: {
          width: number
          height: number
        }
      }
    }
  }
}

export default Work
