const profileModel = require('../../../models/profile-model')
const validate = require('../../../validation/experience')

// @Auth    True
// @Route   POST api/profile/experience

module.exports = async (req, res) => {
  // Validate first
  const { errors, isValid } = validate(req.body)
  if (!isValid)
    return res.status(400).json(errors)

  // Get info from JWT
  const { id: user } = req.user

  // Get data from user submition
  const { title, company, location, from, to, current, description } = req.body

  const userFinder = await profileModel.findOne({ user })

  if (userFinder.experience.find(e =>
    e.company.toLowerCase().trim() === company.toLowerCase().trim()))
      return res.status(400).json({ errors: 'The company already existed in your experience!'})

  const newExperience = { title, company, from }

  // Add data if data fields empty
  if (location) newExperience.location = location
  if (to) newExperience.to = to
  if (description) newExperience.description = description
  if (current) newExperience.current = current

  if (userFinder) {
    userFinder.experience.unshift(newExperience)
    await userFinder.save()
    return res.json(userFinder)
  }
}