const postsModel = require('../../../models/post-model')

// @Auth   false
// @route  GET /api/posts/:postId

module.exports = async (req, res) => {
  const singlePost = await postsModel.findById({ _id: req.params.postId })
    .catch(() => res.status(404).json({ errors: 'Post not found!' }))

  if (!singlePost)
    return res.status(400).json({ errors: 'Post not found!' })

  return res.json(singlePost)
}