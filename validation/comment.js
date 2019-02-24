const { isEmpty, isLength } = require('validator')
const stringConverter = require('./string-converter')

module.exports = data => {
  let errors = {}
  let { text } = data

  text = stringConverter(text)

  isEmpty(text)
    && (errors.text = 'Comment must be have content...')

  !isLength(text, { min: 5 })
    && (errors.text = 'Comment must have more 5 characters')

  return {
    errors,
    isValid: JSON.stringify(errors) === '{}'
  }
}