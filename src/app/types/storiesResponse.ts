import Stories from './story'

export interface StoriesResponse {
  posts: {
    nodes: Stories[]
  }
}
