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
  categories?: {
    nodes: Category[] // Category型に一致させる
  }
  worksCategories?: {
    nodes: Category[]
  }
  newsCategories?: {
    nodes: Category[]
  }
  content: string
  databaseId: string
  date: string
  excerpt: string
  featuredImage: FeaturedImage
  modified: string
  newsCategories?: {
    nodes: [
      {
        name: string
        databaseId: string
      },
    ]
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
export interface Category {
  id: string
  name: string
  databaseId: string
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
