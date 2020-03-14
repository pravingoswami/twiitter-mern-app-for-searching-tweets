const express = require('express')
const tweetsController = require('../app/controllers/tweetsController')

const router = express.Router()

router.get('/tweets', tweetsController.tweetsList)


module.exports = router