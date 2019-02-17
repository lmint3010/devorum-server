const { isEmpty, isLength, isURL } = require('validator')

module.exports = data => {
  let errors = {}
  const {
    handle, status, skills, website,
    youtube, facebook, twitter, instagram
  } = data

  // Validate user input values
  !isLength(handle, { min: 2, max: 40 })
    && (errors.handle = 'Handle needs to between 2 - 40 characters')

  isEmpty(`${handle}`)
    && (errors.handle = 'Profile handle is required')

  isEmpty(`${status}`)
    && (errors.status = 'Profile status is required')

  isEmpty(`${skills}`)
    && (errors.skills = 'Profile skill is required')

  // Check URLs
  if(!isEmpty(`${website}`)) {
    !isURL(website)
      && (errors.website = 'Not a valid URL')
  }

  if(!isEmpty(`${youtube}`)) {
    !isURL(youtube)
      && (errors.youtube = 'Not a valid URL')
  }

  if(!isEmpty(`${facebook}`)) {
    !isURL(facebook)
      && (errors.facebook = 'Not a valid URL')
  }

  if(!isEmpty(`${twitter}`)) {
    !isURL(twitter)
      && (errors.twitter = 'Not a valid URL')
  }

  if(!isEmpty(`${instagram}`)) {
    !isURL(instagram)
      && (errors.instagram = 'Not a valid URL')
  }

  return {
    error,
    isValid: JSON.stringify(errors) === '{}'
  }
}