import { fetchGraphQL } from '../functions'

/**
 * Fetch a category archive by slug.
 */
export default async function getCategoryBySlug(slug: [string, string] | string, limit = 10) {
  const slugs = Array.isArray(slug) ? slug : [slug]
  let categoryQuery = ''

  if (slugs.length > 0) {
    categoryQuery += `categoryName: "${slugs[0]}"`
  }

  if (slugs.length > 1) {
    // 子カテゴリーのスラッグを使用してフィルタリングするためのクエリパラメータを追加
    categoryQuery += categoryQuery ? `, ` : ''
    categoryQuery += `categoryIn: ["${slugs.slice(1).join('", "')}"]` // 複数の子カテゴリーに対応
  }

  const query = `
  query getCategoryBySlug {
    posts(where: { ${categoryQuery} }, first: ${limit}) {
      nodes {
        date
        slug
        title
        id
        categories {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
      }
    }
  }`

  const variables = {}

  const response = await fetchGraphQL(query, variables)
  return response.data.posts.nodes
}
