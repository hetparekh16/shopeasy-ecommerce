import express from 'express'
import connection from './database/db.js'
import sendData from './database/sendData.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import Routes from './routes/routes.js'

const app = express()

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/', Routes)

const port = 8000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

connection();

app.listen(port, () => {
    console.log(`ShopEasy app listening at http://localhost:${port}`)
})
sendData();