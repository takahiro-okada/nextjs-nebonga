import { fetchGraphQL } from '../functions'

export default async function getCategoryNameBySlug(
  slug: string,
  categoryType: 'categories' | 'worksCategories' | 'newsCategories',
) {
  let query = ''

  if (categoryType === 'categories') {
    query = `
      query GetCategoryNameBySlug {
        categories(where: {slug: "${slug}"}) {
          nodes {
            name
          }
        }
      }`
  } else if (categoryType === 'worksCategories') {
    query = `
      query GetCategoryNameBySlug {
        worksCategories(where: {slug: "${slug}"}) {
          nodes {
            name
          }
        }
      }`
  } else if (categoryType === 'newsCategories') {
    query = `
      query GetCategoryNameBySlug {
        newsCategories(where: {slug: "${slug}"}) {
          nodes {
            name
          }
        }
      }`
  }

  const response = await fetchGraphQL(query, {})
  const categoryName = response.data[categoryType].nodes.map((node: any) => node.name).join(', ')

  return categoryName
}
