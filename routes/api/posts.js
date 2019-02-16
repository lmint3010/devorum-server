const express = require('express')
const router = express.Router()

// @route   GET /api/posts
// @desc    Test posts route
// @access  Public
router.get('/test', (req, res) => res.json({ postcontent: 'Nothing Like Us' }))

module.exports = router