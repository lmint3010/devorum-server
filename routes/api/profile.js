const express = require('express')
const router = express.Router()

// @route   GET /api/profile
// @desc    Test profile route
// @access  Public
router.get('/test', (req, res) => res.json({ fullname: 'Lu Minh Thong' }))

module.exports = router