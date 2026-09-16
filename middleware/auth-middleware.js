import jwt from 'jsonwebtoken'
import 'dotenv/config'

const JWT_SECRET = process.env.JWT_SECRET

export function checkValidHeader(req, res, next) {
    const { token } = req.headers
    if(!token) {
        return res.status(400).json({error: 'Header with token required'})
    } else {
        try {
            const checkToken = jwt.verify(token, JWT_SECRET)
            next()
        } catch (error) {
            return res.status(401).json({error: error.message})
        }
    }
}