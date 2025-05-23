export type GraphQLResponse<T = any> = {
  data?: T
  errors?: Array<{ message: string }>
}

export type Post = {
  title: string
  acf_youtube?: {
    youtubeUrl: string
  }
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

export type Category = {
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

export type Category = {
  nameId: string
}

export type FeaturedImage = {
  node: {
    altText: string
    mediaDetails: {
      height: number
      width: number
    }
    sourceUrl: string
  }
}

export interface Page {
  title: string
  author: {
    node: {
      name: string
      avatar: {
        url: string
      }
    }
  }
  content: string
  databaseId: string
  date: string
  excerpt: string
  featuredImage: FeaturedImage
  modified: string
  slug: string
}
