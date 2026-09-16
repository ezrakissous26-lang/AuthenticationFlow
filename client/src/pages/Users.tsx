import { useEffect, useState } from 'react'
import { getUsers } from '../services/api'
import { useAuthStore } from '../store/authStore'

export default function Users() {

  const token = useAuthStore((state) => state.token)
  const [data, setData] = useState([])

  useEffect(() => {
    async function fecthUsers() {
      const result = await getUsers(token)
      console.log("RESULT:", result)
      console.log("IS ARRAY:", Array.isArray(result))
      setData(result)
    }
    fecthUsers()
  }, [token])


  return (
    <div>
      {data.map((user) => (
        <div key={user._id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  )
}

