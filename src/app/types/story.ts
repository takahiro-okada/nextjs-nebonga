type Stories = {
  id: number
  title: string
  categories: {
    nodes: {
      name: string
    }[]
  }
  date: string
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

interface StoriesResponse {
  posts: {
    nodes: Stories[]
  }
}

export default Stories
