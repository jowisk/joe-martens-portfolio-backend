const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()

const projectsRouter = require('./src/routes/projects')
const mailerRouter = require('./src/routes/mailer')
const authRouter = require('./src/routes/auth')

const port = process.env.PORT || 5000

app.use(express.json())

app.use(cors(`${process.env.CLIENT_URL}`))

app.use('/projects', projectsRouter)
app.use('/mailer', mailerRouter)
app.use('/auth', authRouter)

app.listen(port)