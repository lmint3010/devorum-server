const postModel = require('../../../models/post-model')
const validation = require('../../../validation/comment')

// @Auth  True
// @route /api/posts/comment/:postId

module.exports = (req, res) => {
  const { errors, isValid } = validation(req.body)
  if (!isValid)
    return res.status(400).json(errors)

  const {
    user: { id: user, name, avatar },
    params: { postId },
    body: { text }
  } = req

  postModel.findById(postId)
    .then(async post => {
      post.comments.unshift({ user, text, name, avatar })
      await post.save()
      return res.json({ status: 'Added'})
    })
    .catch(() => res.status(400).json({ errors: 'That post does not exist' }))
}