import { fetchGraphQL } from '../functions'
import { Post } from '../../typs/types'

export default async function getSelectedWorks() {
  const query = `query GetSelectedWorks {
      page(id: "168", idType: DATABASE_ID) {
        top_work_01 {
          topWork01 {
            ...WorkFields
          }
        }
        top_work_02 {
          topWork02 {
            ...WorkFields
          }
        }
        top_work_03 {
          topWork03 {
            ...WorkFields
          }
        }
        top_work_04 {
          topWork04 {
            ...WorkFields
          }
        }
        top_work_05 {
          topWork05 {
            ...WorkFields
          }
        }
        top_work_06 {
          topWork06 {
            ...WorkFields
          }
        }
      }
    }
    
    fragment WorkFields on Work {
      id
      title
      slug
      databaseId
      date
      modified
      featuredImage {
        node {
          altText
          sourceUrl
          mediaDetails {
            sizes {
              height
              width
            }
          }
        }
      }
    }`
  const response = await fetchGraphQL(query)
  const posts: Post[] = []
  if (response.data && response.data.page) {
    Object.keys(response.data.page).forEach((key) => {
      const nestedKey = key.replace('top_work_', 'topWork')
      if (response.data.page[key] && response.data.page[key][nestedKey]) {
        posts.push(response.data.page[key][nestedKey])
      }
    })
  }

  return {
    posts,
  }
}
