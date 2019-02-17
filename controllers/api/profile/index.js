// Model modules
const profileModel = require('../../../models/profile-model')
const userModel = require('../../../models/user-model')

module.exports = async (req, res) => {
  const { id } = req.user

  // Find user matched Id
  const userProfile = await profileModel.findOne({ user: id })
  if(!userProfile)
    return res.status(404).json({ noProfile: 'There is no profile for this user' })

  res.json(userProfile)
}