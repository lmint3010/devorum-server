const { isEmpty, isLength } = require('validator')
const stringConverter = require('./string-converter')

module.exports = data => {
  let errors = {}

  let { text,  } = data

  text = stringConverter(text)

  !isLength(text, { min: 8 })
    && (errors.text = 'Text must be more than 8 charaters')

  isEmpty(text)
    && (errors.text = 'Text field is required!')

  return {
    errors,
    isValid: JSON.stringify(errors) === '{}'
  }
}