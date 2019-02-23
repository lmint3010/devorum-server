const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = {
  index: require('../../controllers/api/profile/index'),
  addProfile: require('../../controllers/api/profile/add'),
  findByHandle: require('../../controllers/api/profile/findByHandle'),
  findByUserId: require('../../controllers/api/profile/findByUserId'),
  findAllProfile: require('../../controllers/api/profile/findAll'),
  addExperience: require('../../controllers/api/profile/addExperience')
}

// @route   GET /api/profile
// @desc    Get current user profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), controller.index)

// @route   GET /api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public
router.get('/handle/:handle', controller.findByHandle)

// @route   GET /api/profile/user/:user_id
// @desc    Get profile by User ID
// @access  Public
router.get('/user/:user_id', controller.findByUserId)

// @route   GET /api/profile/all
// @desc    Get all user profiles
// @access  Public
router.get('/all', controller.findAllProfile)

// @route   GET /api/profile/exp
// @desc    Add/Update user experience
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), controller.addExperience)

// @route   POST /api/profile
// @desc    Add profile for user
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), controller.addProfile)

module.exports = router