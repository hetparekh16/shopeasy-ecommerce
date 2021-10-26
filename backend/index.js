import express from 'express'
import connection from './database/db.js'
import sendData from './database/sendData.js'
const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

connection();

app.listen(port, () => {
    console.log(`ShopEasy app listening at http://localhost:${port}`)
})
sendData();