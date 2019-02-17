const userModel = require('../../../models/user-model')
const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const validateRegister = require('../../../validation/register')

module.exports = async (req, res) => {
  // Validate user request data
  const { errors, isValid } = validateRegister(req.body)
  if (!isValid)
    return res.status(400).json(errors)

  // Initial constants
  const { email, name, password } = req.body

  // Email existed?
  const checker = await userModel.findOne({ email })
  if (checker)
    return res.status(400).json({ message: 'Email already exists' })

  const avatar = gravatar.url(email, { s: '200', r: 'pg', d: 'mm' })
  // Hash user password
  const salt = await bcrypt.genSalt(10)
  const hashPassword = await bcrypt.hash(password, salt)

  // Save new user
  const newUser = new userModel({
    name,
    email,
    password: `${hashPassword}`,
    avatar
  })
  const userSaved = await newUser.save()
  res.json(userSaved)
}