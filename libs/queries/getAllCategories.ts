import { fetchGraphQL } from '../functions'
import { Category } from '../../typs/types'

export default async function getAllCategories(categoryName: string) {
  const query = `query GetAllCategories {
    ${categoryName} {
      nodes {
        id
        name
        slug   
        parent {
          node {
            name
            slug
          }
        }
      }
    }
  }`
  const response = await fetchGraphQL(query)
  return response.data[categoryName].nodes as Category[]
}
