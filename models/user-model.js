const { Schema, model } = require('mongoose')
const { String, Date } = require('../config/schema-types')

const modelname = 'users'

const userSchema = new Schema({
  name: String.required,
  email: String.required,
  password: String.required,
  avatar: String.optional,
  date: Date.current
})

module.exports = model(modelname, userSchema, modelname)