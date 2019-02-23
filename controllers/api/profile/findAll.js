const profileModel = require('../../../models/profile-model')

module.exports = async (req, res) => {
  const result = await profileModel
    .find()
    .populate('user', ['name', 'avatar'])

  if (!result)
    return res.status(404).json('There are no profiles')

  return res.json(result)
}