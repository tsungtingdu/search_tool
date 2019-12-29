const tagService = require('../../services/tagService')

const tagController = {
  getTags: (req, res) => {
    tagService.getTags(req, res, (data) => {
      return res.json(data)
    })
  }
}

module.exports = tagController