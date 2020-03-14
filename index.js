const express = require('express')
const router = require('./config/routes')
const setupDB = require('./config/setupDB')

const app = express()

const port = 3023
setupDB()
app.use('/', router)

app.listen(port, () => {
    console.log('listening on port', port)
})