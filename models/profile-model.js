const { Schema, model } = require('mongoose')

const profileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  company: String,
  website: String,
  location: String,
  bio: String,
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  github: String,
  experience: [{
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: String,
    from: { type: Date, required: true },
    to: { type: Date },
    current: { type: Boolean, default: false },
    description: String
  }],
  education: [{
    school: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: { type: String, require: true },
    from: { type: Date, required: true },
    to: { type: Date },
    description: String
  }],
  socials: {
    youtube: String,
    facebook: String,
    twitter: String,
    instagram: String
  },
  date: { type: Date, default: Date.now }
})

module.exports = model('profile', profileSchema, 'profile')