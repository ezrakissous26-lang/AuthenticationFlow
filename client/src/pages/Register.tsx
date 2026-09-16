import React, { useState } from 'react'
import { register } from '../services/api'
import { useNavigate } from 'react-router'

export default function Register() {
    
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ message, setMessage ] = useState('')
    const [ username, setUsername ] = useState('')
    const navigate = useNavigate()

    return (
        <form onSubmit={async (e) => {
            e.preventDefault()
            try {
                const data = await register(username, email, password)
                setMessage(data.message)
                navigate('/login')
            } catch (error) {
                setMessage(error.message)
            }
        }}>
            <h3>Create your account</h3>
            <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder="Enter your name" />
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="" id="" placeholder="Enter your e-mail" />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" placeholder="Enter your password" />
            <button type="reset">Reset</button>
            <button type="submit">Submit</button>
            <p>{message}</p>
        </form>
    )
}