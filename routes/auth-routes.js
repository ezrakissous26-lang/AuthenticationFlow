import express from 'express'
import { checkValidBody } from '../middleware/validation-midlleware.js'

export const router = express.Router()


router.get('/', (req , res) => {
    res.status(200).json({message: 'Server connected'})
})

router.post('/auth', checkValidBody ,(req, res) => {
    res.status(200).json({message: 'Server connected'})
})