import express from 'express'
import { Request, Response } from 'express'
import dotenv from "dotenv"

// initialize configuration
dotenv.config()
const app = express()
const port = process.env.SERVER_PORT

app.get('/', (_request: Request, response: Response) => {
    response.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
