export async function login(email: string, password: string) {
    try {
        const response = await fetch('http://localhost:3000/auth/login', {
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })
        const data = await response.json()
        console.log(data)
        if(!response.ok) {
            const err = new Error(data.error)
            throw err
        }
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}


export async function register(username: string, email: string, password: string) {
    try {
        const response = await fetch('http://localhost:3000/auth/register', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, email, password})
        })
        const data = await response.json()
        console.log(data)
        if(!response.ok) {
            const err = new Error(data.error)
            throw err
        }
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}