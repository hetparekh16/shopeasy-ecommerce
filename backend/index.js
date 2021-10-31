import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import connection from './database/db.js'
import sendData from './database/sendData.js'

import Routes from './routes/routes.js'

const app = express()

const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

connection();
app.listen(port, () => {
    console.log(`ShopEasy app listening at http://localhost:${port}`)
})
sendData();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/', Routes)