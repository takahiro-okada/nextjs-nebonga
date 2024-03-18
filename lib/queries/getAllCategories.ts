import { fetchGraphQL } from '../functions'
import { Category } from '../types'

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
  console.log(response)
  return response.data[categoryName].nodes as Category[]
}
