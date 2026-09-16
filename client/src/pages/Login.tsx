import { useState } from "react"
import { login } from "../services/api"
import { useAuthStore } from "../store/authStore"
import { useNavigate } from "react-router"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const setToken = useAuthStore((state) => state.setToken)
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <form onSubmit={async (e) => {
            e.preventDefault()
            try {
                const data = await login(email, password)
                setToken(data.token)
                setIsLoggedIn(true)
                setMessage(data.message)
            } catch (error) {
                setIsLoggedIn(false)
                setMessage(error.message)
            }
        }}>

            <h3>LogIn to your account</h3>
            <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} name="" id="" placeholder="Enter your e-mail" />
            <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} name="" id="" placeholder="Enter your password" />
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
            <p>{message}</p>
            {isLoggedIn && (
                <button type="button" onClick={() => navigate('/users')}>
                    Go to Users
                </button>
            )}

        </form>
    )
}