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
  content: string
  databaseId: string
  date: string
  excerpt: string
  featuredImage: FeaturedImage
  modified: string
  newsCategories?: {
    nodes: Category[]
  }
  next?: {
    title: string
    slug: url
    uri: string
  }
  previous?: {
    title: string
    slug: url
    uri: string
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
  worksCategories?: {
    nodes: Category[]
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
