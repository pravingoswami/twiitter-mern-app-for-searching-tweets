const express = require('express')
const router = require('./config/routes')
const setupDB = require('./config/setupDB')
const cors = require('cors')

const app = express()

const port = 3023

app.use(cors())
setupDB()
app.use('/', router)


const server = app.listen(port, () => {
    console.log('listening on port', port)
})

module.exports = server