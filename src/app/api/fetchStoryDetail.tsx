const fetchStoryDetail = async (slug: string) => {
  const query = `
    query AllStorys($slug: ID!) {
      story(id: $slug, idType: SLUG) {
        title
        content
      }
    }
  `

  const variables = {
    slug: slug,
  }

  const res = await fetch('https://wp.nebonga.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()

  if (!json.data || !json.data.work) {
    console.error('Unexpected API response:', json)
    throw new Error('Failed to fetch work data.')
  }

  return json.data.work
}

export { fetchStoryDetail }
