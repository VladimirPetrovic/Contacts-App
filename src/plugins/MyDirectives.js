import validator from 'validator'

const RULES = {
  REQUIRED: 'required',
  NUMBER: 'number',
  EMAIL: 'email'
}

const MESSAGES_CLASS_NAME = 'validator-messages'

const removeMessageErrorElements = (element) => {
  let oldMessageElements = element.querySelectorAll(`.${MESSAGES_CLASS_NAME}`)

  oldMessageElements.forEach(element => {
    element.remove()
  });
}

const showMessageErrorElement = (element, message) => {
  let messageElement = document.createElement('div')

  messageElement.classList.add(MESSAGES_CLASS_NAME)
  messageElement.innerHTML = message
  element.appendChild(messageElement)
}

const MyDirectives = {
  install: function(Vue) {
    Vue.directive('focusOn', {
      inserted: function(element) {
        element.focus()
      }
    })

    Vue.directive('validate', {
      inserted: function (element, binding) {
        let validationConfig = binding.value
        let validationRules = validationConfig.validationRules

        element.addEventListener('submit', (event) => {
          let errorCounter = 0
          event.preventDefault()
          removeMessageErrorElements(element)

          Object.keys(validationRules).forEach(key => {
            let input = element.querySelector(`#${key}`)

            if (!input) {
              throw new Error(
                `Input element for validation rule ${key} not found!`)
            }

            if (validationRules[key].indexOf(RULES.EMAIL) > -1 && !validator.isEmail(input.value)) {
              errorCounter++
              let message = `This field must be email`
              showMessageErrorElement(element, message)
            }

            if (validationRules[key].indexOf(RULES.REQUIRED) > -1 && !input.value.length) {
              errorCounter++
              let message = `${key.toUpperCase()} is required`
              showMessageErrorElement(element, message)
            }
          })

          if (errorCounter === 0) {
            validationConfig.submitCallback()
          }
        })
      }
    })
  }
}

export default MyDirectives