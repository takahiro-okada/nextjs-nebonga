export const GET_FILTERED_WORKS = (categorySlug?: string, subCategorySlug?: string): string => {
  let categoryQuery = ''

  if (categorySlug) {
    categoryQuery += `categoryName: "${categorySlug}"`
  }

  if (subCategorySlug) {
    categoryQuery += `, subCategoryName: "${subCategorySlug}"`
  }

  console.log(categoryQuery)

  const query = `query GET_FILTERED_WORKS {
    works( where: { ${categoryQuery} } ) {
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
    }
  `

  return query
}

export default GET_FILTERED_WORKS
