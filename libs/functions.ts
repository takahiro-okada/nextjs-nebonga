import { GraphQLResponse } from '../typs/types'

/**
 * Function to execute a GraphQL query.
 */
export async function fetchGraphQL<T = any>(
  query: string,
  variables?: { [key: string]: any },
  preview = false,
): Promise<GraphQLResponse<T>> {
  try {
    // Validate the WordPress GraphQL URL.
    const graphqlUrl = process.env.NEXT_PUBLIC_WORDPRESS_GRAPHQL_URL
    if (!graphqlUrl) {
      throw new Error('Missing WordPress GraphQL URL environment variable!')
    }

    // Get the refresh token.
    const refreshToken = process.env.NEXTJS_AUTH_REFRESH_TOKEN

    // Prepare headers.
    const headers: { [key: string]: string } = {
      'Content-Type': 'application/json',
    }

    // If preview mode is enabled and we have a token.
    if (preview && refreshToken) {
      // Add refresh token to fetch headers.
      headers['Authorization'] = `Bearer ${refreshToken}`
    }

    // Get the slug.
    const slug = variables?.slug || variables?.id || 'graphql'

    // Fetch data from external API.
    const response = await fetch(graphqlUrl, {
      body: JSON.stringify({
        query,
        variables,
      }),
      headers: headers,
      method: 'POST',
      next: {
        tags: ['graphql'],
        revalidate: 10,
      },
    })

    // If the response status is not 200, throw an error.
    if (!response.ok) {
      console.error('Response Status:', response.status)
      throw new Error(response.statusText)
    }

    const data = await response.json()
    if (data.errors) {
      data.errors.forEach((error: any) => {
        console.error('Error message:', error.message)
      })
      // Include the first error message in the thrown error.
      throw new Error(`Error executing GraphQL query: ${data.errors[0].message}`)
    }

    // Finally, return the data.
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
