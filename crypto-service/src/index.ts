import express from 'express'
import dotenv from "dotenv";

// initialize configuration
dotenv.config();
const app = express()
const port = process.env.SERVER_PORT

app.get('/', (_request, response) => {
    response.send('Hello World!')
})

app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Example app listening at http://localhost:${port}`)
})
