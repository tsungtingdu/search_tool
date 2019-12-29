const db = require('../models')
const { Tag } = db

const tagService = {
  getTags: async (req, res, callback) => {
    try {
      let tags = await Tag.findAll()
      return callback({
        status: 'success',
        message: 'get all tags successfully',
        content: tags
      })
    }
    catch (err) {
      return callback({
        status: 'error',
        message: 'Can not get tags',
        content: err
      })
    }
  }
}

module.exports = tagService
