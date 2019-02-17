const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = {
  register: require('../../controllers/api/users/register'),
  login: require('../../controllers/api/users/login'),
  current: require('../../controllers/api/users/current')
}

// @route     GET /api/users/test
// @desc      Test users API
// @access    Public
router.get('/test', (_, res) => res.json({ test: 'OK' }))

// @route     POST /api/users/register
// @desc      Register new user
// @access    Public
router.post('/register', controller.register)

// @route     POST /api/users/login
// @desc      Login | Return JWT (Json web token)
// @access    Public
router.post('/login', controller.login)

// @route     GET /api/users/current
// @desc      Get the user information in current time
// @access    Private
router.get('/current', passport.authenticate('jwt', { session: false }) ,controller.current)

module.exports = router

