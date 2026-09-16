import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET

export function checkValidHeader(req, res, next) {
    const authHeader = req.headers.authorization
    if (!authHeader) {
        return res.status(400).json({error: 'Header with token required'})
    }
    const [ type, token ] = authHeader.split(' ')
    if(!token || type !== 'Bearer') {
        return res.status(400).json({error: 'Header with token required and type Bearer'})
    } else {
        try {
            const checkToken = jwt.verify(token, JWT_SECRET)
            next()
        } catch (error) {
            return res.status(401).json({error: error.message})
        }
    }
}