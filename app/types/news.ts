type News = {
  id: number
  title: string
  content: string
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

export default News
