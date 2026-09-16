import { userLogin, userRegister } from '../schemas/schema.js'

export async function checkValidregister(req, res, next) {
    try {
        userRegister.parse(req.body)
        next()
    } catch (error) {
        return res.status(400).json({error: `Invalid ${JSON.parse(error).map((item) => item.path[0] || item.message)}`})
    }
}

export async function checkValidLogin(req, res, next) {
    try {
        userLogin.parse(req.body)
        next()
    } catch (error) {
        return res.status(400).json({error: `Invalid ${JSON.parse(error).map((item) => item.path[0] || item.message)}`})
    }
}