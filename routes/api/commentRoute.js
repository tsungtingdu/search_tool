const express = require('express')
const router = express.Router()

const commentController = require('../../controllers/api/commentController')

router.get('/', commentController.getComments)

module.exports = router