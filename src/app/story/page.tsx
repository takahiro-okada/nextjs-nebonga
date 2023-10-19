import { log } from 'console'

export default async function Page() {
  const res = await fetch('https://hirokawasaki-works.com/graphql')
  const data = await res.json()
  console.log(data)

  return <h1>{data.id}</h1>
}
