import bcrypt from 'bcrypt'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { getUserbyEmail } from "../repo/repo.js"

const JWT_SECRET = process.env.JWT_SECRET

export async function loginService(user) {
    try {
        const { email, password } = user
        const userInfo = await getUserbyEmail(email)
        if (!userInfo) {
            const err = new Error('This user dont have account')
            err.status = 401
            throw err
        } else {
            const checkGoodPassword = await bcrypt.compare(password, userInfo.password)
            if (checkGoodPassword) {
                const token = jwt.sign({ email, userId: userInfo._id }, JWT_SECRET)
                return token
            } else {
                const err = new Error('Wrong password')
                err.status = 401
                throw err
            }
        }
    } catch (error) {
        throw error
    }
}