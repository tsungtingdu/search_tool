const express = require('express')
const router = express.Router()

const tagController = require('../../controllers/api/tagController')

router.get('/', tagController.getTags)

module.exports = router