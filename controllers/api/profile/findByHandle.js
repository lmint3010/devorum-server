const profileModel = require('../../../models/profile-model')

// @route  /api/profile/handle/:handle

module.exports = async (req, res) => {
  const result = await profileModel
    .findOne({ handle: req.params.handle })
    .populate('user', ['name', 'avatar'])

  if (!result)
    return res.status(404).json({
      errors: 'There is no profile for this user',
      systemError: result
    })
  return res.json(result)
}