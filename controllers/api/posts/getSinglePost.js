const postsModel = require('../../../models/post-model')

// @Auth   false
// @route  GET /api/posts/:postId

module.exports = (req, res) => {
  postsModel.findById({ _id: req.params.postId })
    .then(post => res.json(post))
    .catch(() => res.status(404).json({ errors: 'Post not found!' }))
}