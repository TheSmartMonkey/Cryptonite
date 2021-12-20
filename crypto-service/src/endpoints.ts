import express from 'express'
import { Request, Response } from 'express'
import dotenv from 'dotenv'

// Initialize configuration
dotenv.config()
const app = express()
const port = process.env.SERVER_PORT

app.get('/', (_request: Request, response: Response) => {
    response.send('Endpoint list')
})

app.listen(port, () => {
    console.log(`Cryptonite app listening at http://localhost:${port}`)
})
