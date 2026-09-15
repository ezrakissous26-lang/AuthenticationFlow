import express from 'express'
import dotenv from 'dotenv/config'
import { router } from './routes/auth-routes.js'
import { clientConnect } from './config/connect.js'

const PORT = process.env.PORT

const app = express()

app.use(express.json())
app.use('/', router)


async function startServer() {
    await clientConnect()
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`)
    })
}

await startServer()