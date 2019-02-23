const profileModel = require('../../../models/profile-model')

// @Auth    True
// @route   DELETE /api/profile/experience/:experience_id

module.exports = async (req, res) => {
  const {
    params: { experience_id },
    user: { id: user }
  } = req

  const profile = await profileModel.findOne({ user })

  const { experience } = profile

  if (JSON.stringify(experience) === '[]')
    return res.json({ errors: 'Nothing to delete' })

  // Find the index of the specified experience in array
  const removeIndex = experience
    .map(e => `${e._id}`)
    .indexOf(experience_id)

  if(removeIndex === -1)
    return res.status(400).json({ errors: 'The ID not matched!'})

  profile.experience.splice(removeIndex, 1)
  await profile.save()
  return res.json(profile)
}