export interface GraphQLResponse<T = any> {
  data?: T
  errors?: Array<{ message: string }>
}

export interface Post {
  title: string
  author: {
    node: {
      name: string
      avatar: {
        url: string
      }
    }
  }
  categories: {
    nodes: [
      {
        name: string
        databaseId: string
      },
    ]
  }
  commentCount: number
  content: string
  databaseId: string
  date: string
  excerpt: string
  featuredImage: FeaturedImage
  modified: string
  seo: {
    title: string
    metaDesc: string
  }
  slug: string
  tags: {
    nodes: [
      {
        name: string
        databaseId: string
      },
    ]
  }
}

// 調査中
export interface Category {
  id: string
  name: string
  parent?: {
    node: {
      name: string
      slug: string
    }
  }
  slug: string
}

export interface FeaturedImage {
  node: {
    altText: string
    mediaDetails: {
      height: number
      width: number
    }
    sourceUrl: string
  }
}
