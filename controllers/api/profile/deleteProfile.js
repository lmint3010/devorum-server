const profileModel = require('../../../models/profile-model')
const userModel = require('../../../models/user-model')

module.exports = async (req, res) => {
  // Get the user ID
  const { user: { id: user } } = req

  // Delete user profile
  await profileModel.findOneAndRemove({ user })

  // Delete user information
  await userModel.findOneAndRemove({ _id: user })

  return res.json({ success: true })
}