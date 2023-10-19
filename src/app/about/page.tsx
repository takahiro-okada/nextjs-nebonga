type User = {
  id: string
  name: string
  email: string
}

const getUsers = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

const Page = async () => {
  const users = await getUsers()
  return (
    <div className='m-4'>
      <h1 className='text-lg font-bold'>Aboutページ</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Page
