const { isEmpty, isLength, isURL } = require('validator')
const stringConverter = require('./string-converter')

module.exports = data => {
  let errors = {}
  let {
    handle, status, skills, website,
    youtube, facebook, twitter, instagram
  } = data

  handle = stringConverter(handle)
  status = stringConverter(status)
  skills = stringConverter(skills)
  website = stringConverter(website)
  youtube = stringConverter(youtube)
  facebook = stringConverter(facebook)
  twitter = stringConverter(twitter)
  instagram = stringConverter(instagram)

  // Validate user input values
  !isLength(handle, { min: 2, max: 40 })
    && (errors.handle = 'Handle needs to between 2 - 40 characters')

  isEmpty(handle)
    && (errors.handle = 'Profile handle is required')

  isEmpty(status)
    && (errors.status = 'Profile status is required')

  isEmpty(skills)
    && (errors.skills = 'Profile skill is required')

  if (!isEmpty(website)) {
    !isURL(website)
      && (errors.website = 'Not a valid URL')
  }

  if (!isEmpty(youtube)) {
    !isURL(youtube)
      && (errors.youtube = 'Not a valid URL')
  }

  if (!isEmpty(facebook)) {
    !isURL(facebook)
      && (errors.facebook = 'Not a valid URL')
  }

  if (!isEmpty(twitter)) {
    !isURL(twitter)
      && (errors.twitter = 'Not a valid URL')
  }

  if (!isEmpty(instagram)) {
    !isURL(`${instagram}`)
      && (errors.instagram = 'Not a valid URL')
  }

  return {
    errors,
    isValid: JSON.stringify(errors) === '{}'
  }
}