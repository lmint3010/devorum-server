const express = require('express')
const router = express.Router()
const passport = require('passport')

const controller = {
  addPost: require('../../controllers/api/posts/addPost'),
  getPost: require('../../controllers/api/posts/getPost'),
  getSinglePost: require('../../controllers/api/posts/getSinglePost'),
  deletePost: require('../../controllers/api/posts/deletePost'),
  likeHandle: require('../../controllers/api/posts/likeHandle')
}

// @route   POST /api/posts
// @desc    Create post
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), controller.addPost)

// @route   GET /api/posts
// @desc    Get all posts
// @access  Public
router.get('/', controller.getPost)

// @route   GET /api/posts/:postId
// @desc    Get single post by Id
// @access  Public
router.get('/:postId', controller.getSinglePost)

// @route   DELETE /api/posts/:postId
// @desc    Delete post by Id
// @access  Private
router.delete('/:postId', passport.authenticate('jwt', { session: false }), controller.deletePost)

// @route   POST /api/posts/like/:postId
// @desc    Handle user like
// @access  Private
router.post('/like/:postId', passport.authenticate('jwt', { session: false }), controller.likeHandle)

module.exports = router