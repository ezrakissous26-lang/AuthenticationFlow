import { authService } from "../services/auth-service.js"
import { loginService } from "../services/login-service.js"
import { processRegister } from "../services/register-service.js"

export async function controllerAuthRegister (req, res) {
    try {
        await processRegister(req.body)
        res.status(201).json({message: 'User registered successfully'})
    } catch (error) {
        res.status(error.status || 500).json({error: error.message})
    }
}

export async function controllerLogin (req, res) {
    try {
        const token = await loginService(req.body)
        res.status(200).json({message: 'Login succesfull', token: token})
    } catch (error) {
        res.status(error.status || 500).json({error: error.message})
    }
}

export async function controllerAuthUser(req, res) {
    try {
        const result = await authService()
        res.status(200).json(result)
    } catch (error) {
        res.status(error.status || 500).json({error: error.message})
    }
}