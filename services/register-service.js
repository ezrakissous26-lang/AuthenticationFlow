import bcrypt from 'bcrypt'
import { createUser, getUserbyEmail } from '../repo/repo.js'

export async function processRegister(user) {
    try {
        const { username, email, password } = user
        const hash = await bcrypt.hash(password, 10)
        const isExist = await getUserbyEmail(email)
        if (!isExist) {
            await createUser({username, email, password: hash})
        } else {
            const err = new Error('This user have already an account')
            err.status = 409
            throw err
        }
    } catch (error) {
        if (!error.status) {
            const err = new Error(error.message)
            err.status = 500
            throw err
        } else {
            throw error
        }
    }
}