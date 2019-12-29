const db = require('../models')
const { Comment } = db

const commentService = {
  getComments: async (req, res, callback) => {
    try {
      let comments = await Comment.findAll()
      return callback({
        status: 'success',
        message: 'get all comments successfully',
        content: comments
      })
    }
    catch (err) {
      return callback({
        status: 'error',
        message: 'Can not get comments',
        content: err
      })
    }
  }
}

module.exports = commentService