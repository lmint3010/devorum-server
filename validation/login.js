const { isEmail, isEmpty } = require('validator')
const stringConverter = require('./string-converter')

module.exports = (data) => {
  let errors = {}
  let { email, password } = data

  email = stringConverter(email)
  password = stringConverter(password)

  isEmpty(email)
    && (errors.email = 'Please enter your email')

  isEmpty(password)
    && (errors.password = 'Please enter your password')

  !isEmail(email)
    && (errors.email = 'Email is not valid')

  // Return result after validate
  return {
    errors,
    isValid: JSON.stringify(errors) === '{}'
  }
}