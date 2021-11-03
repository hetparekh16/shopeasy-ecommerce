import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv';
import { v4 as uuid } from 'uuid';
import connection from './database/db.js'
import sendData from './database/sendData.js'

import Routes from './routes/routes.js'
dotenv.config();
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


export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
    paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
    paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
    paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
    paytmParams['ORDER_ID'] = uuid(),
    paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
    paytmParams['TXN_AMOUNT'] = '100',
    paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = 'codeforinterview01@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'