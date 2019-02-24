const postModel = require('../../../models/post-model')
const validate = require('../../../validation/post')

module.exports = async (req, res) => {
  const { errors, isValid } = validate(req.body)
  if(!isValid)
    return res.status(400).json(errors)

  const {
    body: { text },
    user: { id: user, name, avatar }
  } = req

  const newPost = new postModel({ text, name, avatar, user })

  const postUploaded = await newPost.save()
  if(!postUploaded)
    return res.status(400).json({ errors: 'Upload Failed!' })

  return res.json(postUploaded)
}