const postsModel = require('../../../models/post-model')

// @Auth  True
// @Route /api/posts/comment/:postId/:commentId

module.exports = (req, res) => {
  const {
    params: { postId, commentId },
    user: { id: userId }
  } = req

  postsModel.findById(postId)
    .then(async post => {
      post.comments = post.comments
        .filter(comment => `${comment.id}` !== `${commentId}`)
      await post.save()
      return res.json({ status: 'Deleted' })
    })
    .catch(() => res.status(404).json({ error: 'Post not found!' }))
}