const express = require('express')
const cors = require('cors')
const app = express()
const db = require('./config/db')
const blockRouters = require('./routes/blocks')


app.use(cors())
app.use(express.json())

app.use('/api/blocks', blockRouters)

module.exports = app;