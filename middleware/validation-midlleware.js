import { userRegister } from '../schemas/schema.js'

export async function checkValidBody(req, res, next) {
    try {
        userRegister.parse(req.body)
        next()
    } catch (error) {
        return res.status(400).json({error: `Invalid ${JSON.parse(error).map((item) => item.path[0])}`})
    }
}