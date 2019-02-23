const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = {
  index: require('../../controllers/api/profile/index'),
  addProfile: require('../../controllers/api/profile/add'),
  findByHandle: require('../../controllers/api/profile/findByHandle'),
  findByUserId: require('../../controllers/api/profile/findByUserId'),
  findAllProfile: require('../../controllers/api/profile/findAll'),
  addExperience: require('../../controllers/api/profile/addExperience'),
  addEducation: require('../../controllers/api/profile/addEducation'),
  deleteExperience: require('../../controllers/api/profile/deleteExperience'),
  deleteEducation: require('../../controllers/api/profile/deleteEducation'),
  deleteProfile: require('../../controllers/api/profile/deleteProfile')
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

// @route   GET /api/profile/experience
// @desc    Add experience to user profile
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), controller.addExperience)

// @route   DELETE /api/profile/experience/:experience_id
// @desc    Delete user experience
// @access  Private
router.delete('/experience/:experience_id', passport.authenticate('jwt', { session: false }), controller.deleteExperience)

// @route   GET /api/profile/education
// @desc    Add education to user profile
// @access  Private
router.post('/education', passport.authenticate('jwt', { session: false }), controller.addEducation)

// @route   DELETE /api/profile/education/:education_id
// @desc    Delete user education
// @access  Private
router.delete('/education/:education_id', passport.authenticate('jwt', { session: false }), controller.deleteEducation)

// @route   POST /api/profile
// @desc    Add profile for user
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), controller.addProfile)

// @route   DELETE /api/profile
// @desc    Delete profile & user account
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), controller.deleteProfile)

module.exports = router