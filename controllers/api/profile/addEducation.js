const profileModel = require('../../../models/profile-model')
const validate = require('../../../validation/education')

// @Auth    True
// @Route   POST api/profile/education

module.exports = async (req, res) => {
  // Validate first
  const { errors, isValid } = validate(req.body)
  if (!isValid)
    return res.status(400).json(errors)

  // Get info from JWT
  const { id: user } = req.user

  // Get data from user submition
  const { school, degree, fieldOfStudy, from, to , description } = req.body

  const userFinder = await profileModel.findOne({ user })

  if (userFinder.education.find(e =>
    e.school.toLowerCase().trim() === school.toLowerCase().trim()))
      return res.status(400).json({ errors: 'The school already existed in your education!'})

  const newEducation = { school, degree, fieldOfStudy, from }

  // Add data if data fields empty
  if (to) newEducation.to = to
  if (description) newEducation.description = description

  if (userFinder) {
    userFinder.education.unshift(newEducation)
    await userFinder.save()
    return res.json(userFinder)
  }
}