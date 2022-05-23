'use strict'

require('dotenv').config()
const Express = require('express')
const bodyParser = require('body-parser')
const I18n = require('./src/i18n/i18n')

const app = Express()

app.use(Express.json())
app.use(Express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(I18n)

const port = process.env.PORT
const indexRoute = require('./src/routes')

app.use('/', indexRoute)


app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
    console.log(`db port - ${process.env.DB_HOST}`)
})