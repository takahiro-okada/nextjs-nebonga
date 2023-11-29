type Work = {
  id: number
  title: string
  content: string
  date: string
  featuredImage: {
    node: {
      altText: string
      mediaDetails: {
        height: number
        width: number
      }
      sourceUrl: string
    }
  }
  slug: string
}

export default Work
