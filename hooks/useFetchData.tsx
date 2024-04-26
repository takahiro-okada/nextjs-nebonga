import { useEffect, useState } from 'react'

export default function useFetchData<T>(
  query: string,
  url: string,
): { data: T | null; error: any; isLoading: boolean } {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch(url, {
      body: JSON.stringify({ query }),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      next: {
        revalidate: 10,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setData(json.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [query, url])

  return { data, error, isLoading }
}
