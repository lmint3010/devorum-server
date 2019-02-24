const postsModel = require('../../../models/post-model')
const profileModel = require('../../../models/user-model')

// The user can only delete the own post.
// User can't delete the posts of other people

module.exports = async (req, res) => {
  const {
    user: { id: userIdFromJwt },
    params: { postId }
  } = req

  postsModel.findById(postId)
    .then(async post => {
      if(`${post.user}` !== `${userIdFromJwt}`)
        return res.status(401).json({ notAuthorized: 'User does not have permission to delete this post' })

      const deleted = await post.remove()
        .catch(() => res.status(400).json({ failToRemove: 'Fail to remove this post' }))

      return res.json({ success: true })
    })
    .catch(() => res.status(404).json({ postnotfound: 'No post found'}))
}