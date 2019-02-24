const postsModel = require('../../../models/post-model')

// @Auth    True
// @Route   POST /api/posts/like/:postId

module.exports = (req, res) => {
  const {
    params: { postId },
    user: { id: userId }
  } = req

  postsModel.findById(postId)
    .then(async post => {
      // Handle unlike
      if(post.likes.find(like => `${like.user}` === `${userId}`)) {
        const likeIndex = post.likes
          .map(like => `${like.user}`)
          .indexOf(userId)

        // Unlike & Save
        post.likes.splice(likeIndex, 1)
        await post.save()
        return res.json({ status: 'unliked' })
      }

      // Handle like
      post.likes.unshift({ user: userId })
      await post.save()
      return res.json({ status: 'liked' })
    })
    .catch(() => res.status(404).json({ error: 'That post does not existed!'}))
}