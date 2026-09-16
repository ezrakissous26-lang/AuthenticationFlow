import { processUser } from "../services/user-service.js"

export async function controllerAuthRegister (req, res) {
    try {
        await processUser(req.body)
        res.status(201).json({message: 'User registered successfully'})
    } catch (error) {
        res.status(error.status || 500).json({error: error.message})
    }
}
