'use strict'

const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
    console.log(`db port - ${process.env.DB_HOST}`)
})