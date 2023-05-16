const express = require('express')
const axios = require('axios')
const cors = require('cors')
require('dotenv').config()
const sendEmail = require('./src/config/mailer')

const port = process.env.PORT || 5000

const app = express()

app.use(express.json())

app.use(cors(`${process.env.CLIENT_URL}`))
app.post("/send", async (req, res) => {
    try {
        const { email, subject, body } = req.body
        sendEmail(req.body)
        res.json({ msg: "msg sent !"});
    } catch (error) {
        res.status(404).json({ msg: `Error ${error}`})
    }
});



app.listen(port, () => console.log(`http://localhost:${port}`))