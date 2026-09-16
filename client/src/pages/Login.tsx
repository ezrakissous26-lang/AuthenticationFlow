import { useState } from "react"
import { login } from "../services/api"

export default function Login() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        login(email, password)
        }}>
        <input onChange={(e) =>  setEmail(e.target.value)} type="email" value={email} name="" id="" placeholder="Enter your e-mail"/>
        <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} name="" id="" placeholder="Enter your password"/>
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
    </form>
  )
}