type Works = {
  title: string
  featuredImage: any
  node: {
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
  slug: string
}

export default Works
