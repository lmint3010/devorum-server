module.exports = (req, res) => {
  const { id, name, email, avatar } = req.user
  res.json({ id, name, email, avatar })
}