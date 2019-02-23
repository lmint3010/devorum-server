const profileModel = require('../../../models/profile-model')

// @Auth    True
// @route   DELETE /api/profile/education/:education_id

module.exports = async (req, res) => {
  const {
    params: { education_id },
    user: { id: user }
  } = req

  const profile = await profileModel.findOne({ user })

  const { education } = profile

  if (JSON.stringify(education) === '[]')
    return res.json({ errors: 'Nothing to delete' })

  // Find the index of the specified experience in array
  const removeIndex = education
    .map(e => `${e.id}`)
    .indexOf(education_id)

  if(removeIndex === -1)
    return res.status(400).json({ errors: 'The ID not matched!'})

  profile.education.splice(removeIndex, 1)
  await profile.save()
  return res.json(profile)
}