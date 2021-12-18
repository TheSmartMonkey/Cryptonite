import express from 'express'
const app = express()
const port = 3001

app.get('/', (_request, response) => {
    response.send('Hello World!')
})

app.listen(port, () => {
    // tslint:disable-next-line: no-console
    console.log(`Example app listening at http://localhost:${port}`)
})

