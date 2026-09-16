import express from 'express'
import { checkValidLogin, checkValidregister } from '../middleware/validation-midlleware.js'
import { controllerAuthRegister } from '../controllers/auth-controller.js'

export const router = express.Router()


router.get('/', (req , res) => {
    res.status(200).json({message: 'Server connected'})
})

router.post('/auth/register', checkValidregister , controllerAuthRegister)

router.post('/auth/login', checkValidLogin ,(req, res) => {})