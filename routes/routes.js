import express from 'express'
import { checkValidLogin, checkValidregister } from '../middleware/validation-midlleware.js'
import { controllerAuthRegister, controllerAuthUser, controllerLogin } from '../controllers/controller.js'
import { checkValidHeader } from '../middleware/auth-middleware.js'

export const router = express.Router()


router.get('/', (req , res) => {
    res.status(200).json({message: 'Server connected'})
})

router.post('/auth/register', checkValidregister , controllerAuthRegister)

router.post('/auth/login', checkValidLogin , controllerLogin)

router.get('/users', checkValidHeader, controllerAuthUser)