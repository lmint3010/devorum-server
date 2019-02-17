const { isEmail, isEmpty } = require('validator')

module.exports = (data) => {
  let errors = {}
  const { email, password } = data

  // Let validate from here

  isEmpty(`${email}`)
    && (errors.email = 'Please enter your email')

  isEmpty(`${password}`)
    && (errors.password = 'Please enter your password')

  !isEmail(email)
    && (errors.email = 'Email is not valid')

  // Return result after validate
  return {
    errors,
    isValid: JSON.stringify(errors) === '{}'
  }
}