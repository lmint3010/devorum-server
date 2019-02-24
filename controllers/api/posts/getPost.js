const postsModel = require('../../../models/post-model')

// @Auth   false
// @route  GET /api/posts/

module.exports = async (req, res) => {
  const posts = await postsModel.find()
    .sort({ date: -1 })

  if(!posts)
    return res.status(400).json({ errors: 'Posts list is none' })

  return res.json(posts)
}