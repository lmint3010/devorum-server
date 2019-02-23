const stringConverter = require('./string-converter')
const { isEmpty } = require('validator')

module.exports = data => {
  let errors = {}

  // Destructuring data
  let { title, company, from } = data

  // Convert to Strings
  title = stringConverter(title)
  company = stringConverter(company)
  from = stringConverter(from)

  // Validation
  isEmpty(title)
    && (errors.title = 'Job title is required')

  isEmpty(company)
    && (errors.company = 'Company name is required')

  isEmpty(from)
    && (errors.from = 'From date is required')

  return {
    errors,
    isValid: JSON.stringify(errors) === '{}'
  }
}