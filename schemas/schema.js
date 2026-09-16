import { email, z } from 'zod'

export const userRegister = z.object({
    username: z.string(),
    email: z.email(),
    password: z.string().min(6)
})

export const userLogin = z.object({
    email: z.email(),
    password: z.string().min(6)
})