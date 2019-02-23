const profileModel = require('../../../models/profile-model')

// @route  /api/profile/user/:user_id

module.exports = async (req, res) => {
  const result = await profileModel
    .findOne({ user: req.params.user_id })
    .populate('user', ['name', 'avatar'])

  if (!result)
    return res.status(404).json({
      errors: 'There is no profile for this user',
      systemError: result
    })
  return res.json(result)
}