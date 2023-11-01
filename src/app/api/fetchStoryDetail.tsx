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
    body: JSON.stringify({ query, variables }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const json = await res.json()

  if (!json.data || !json.data.work) {
    console.error('Unexpected API response:', json)
    throw new Error('Failed to fetch work data.')
  }

  return json.data.work
}

export { fetchStoryDetail }
