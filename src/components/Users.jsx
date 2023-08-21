import { useEffect, useState } from 'react'

export const Users = () => {
  const [users, setUsers] = useState([])
  const fetchUsers = async () => {
    try {
      const url = 'https://jsonplaceholder.typicode.com/photos'
      const response = await fetch(url)
      setUsers(await response.json())
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])
  return (
    <>
      <h2>Listado de Usuarios</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.id} {u.title}
            {/* <img src={u.thumbnailUrl} alt="imagen de jsonplaceholder" /> */}
          </li>
        ))}
      </ul>
    </>
  )
}
