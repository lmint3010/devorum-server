const stringConverter = require('./string-converter')
const { isEmpty } = require('validator')

module.exports = data => {
  let errors = {}

  // Destructuring data
  let { school, degree, fieldOfStudy, from } = data

  // Convert to Strings
  school = stringConverter(school)
  degree = stringConverter(degree)
  fieldOfStudy = stringConverter(fieldOfStudy)
  from = stringConverter(from)

  // Validation
  isEmpty(school)
    && (errors.school = 'School name is required')

  isEmpty(degree)
    && (errors.degree = 'Degree is required')

  isEmpty(fieldOfStudy)
    && (errors.fieldOfStudy = 'Field of study is required')

  isEmpty(from)
    && (errors.from = 'From date is required')

  return {
    errors,
    isValid: JSON.stringify(errors) === '{}'
  }
}