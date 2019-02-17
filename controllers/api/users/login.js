const userModel = require('../../../models/user-model')
const { secretKey } = require('../../../config/keys')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
  // Initial constants
  const { email, password } = req.body

  // Find user information
  const user = await userModel.findOne({ email })

  // @Login   Fail | Email not found
  // @Handle  Response message
  if (!user)
    return res.status(404).json({ message: 'User email not found!' })

  // @Login   Fail | Incorrect password
  // @Handle  Response message
  const passwordChecker = await bcrypt.compare(password, user.password)
  !passwordChecker && res.status(400).json({ message: 'Password is incorrect!' })

  // @Login   Success
  // @Handle  Response JWT to final user
  const { _id, name, avatar } = user
  const payload = { _id, name, avatar }

  // Get new token & response
  const token = await jwt.sign(payload, secretKey, { expiresIn: 3600 })
  return res.json({
    success: true,
    token: `Bearer ${token}`
  })
}