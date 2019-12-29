const express = require('express')
const router = express.Router()

const commentRoute = require('./api/commentRoute')
const tagRoute = require('./api/tagRoute')

router.use('/comments', commentRoute)
router.use('/tags', tagRoute)

// 處理例外 api routes
router.get('*', (req, res) => res.send("This api route doesn't exist"))

module.exports = router