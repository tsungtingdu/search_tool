const commentService = require('../../services/commentService')

const commentController = {
  getComments: (req, res) => {
    commentService.getComments(req, res, (data) => {
      return res.json(data)
    })
  }
}

module.exports = commentController