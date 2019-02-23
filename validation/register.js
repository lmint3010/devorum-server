const { isLength, isEmail, isEmpty, equals } = require('validator')
const stringConverter = require('./string-converter')

module.exports = (data) => {
  let errors = {}
  let { name, email, password, password2 } = data

  name = stringConverter(name)
  email = stringConverter(email)
  password = stringConverter(password)
  password2 = stringConverter(password2)

  // Let validate from here
  isEmpty(name)
    && (errors.name = 'Please enter your name')

  isEmpty(email)
    && (errors.email = 'Please enter your email')

  isEmpty(password)
    && (errors.password = 'Please enter your password')

  isEmpty(password2)
    && (errors.password2 = 'Please confirm your password')

  !equals(password, password2)
    && (errors.password2 = 'Your password not match! Please check again')

  !isLength(password, { min: 6, max: 30 }) && !errors.password
    && (errors.password = 'Password must be between 6 - 30 characters')

  !isLength(name, { min: 2, max: 30 }) && !errors.name
    && (errors.name = 'Name must be between 2 - 30 characters')

  !isEmail(email)
    && (errors.email = 'Email is not valid')

  // Return result after validate
  return {
    errors,
    isValid: JSON.stringify(errors) === '{}'
  }
}