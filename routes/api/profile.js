const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = {
  index: require('../../controllers/api/profile/index'),
  addProfile: require('../../controllers/api/profile/add')
}

// @route   GET /api/profile
// @desc    Get current user profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), controller.index)

// @route   POST /api/profile
// @desc    Addition profile for user
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), controller.addProfile)

module.exports = router