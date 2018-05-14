const RULES = {
  REQUIRED: 'required',
  NUMBER: 'number',
  EMAIL: 'email'
}


const MESSAGES_CLASS_NAME = 'validator-messages'

const removeMessageErrorElement = (element) => {
  let oldMessageElement = element.querySelector(`#${MESSAGES_CLASS_NAME}`)

  if (oldMessageElement) {
    oldMessageElement.remove()
  }
}

const addMessageErrorElement = (element, key) => {
  let messageElement = document.createElement('div')
  messageElement.id = MESSAGES_CLASS_NAME

  messageElement.innerHTML = `${key.toUpperCase()} is requiered`
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
        let validationRules = binding.value

        element.addEventListener('submit', (event) => {
          event.preventDefault()

          Object.keys(validationRules).forEach(key => {
            let input = element.querySelector(`#${key}`)

            if (!input) {
              throw new Error(
                `Input element for validation rule ${key} not found!`)
            }

            console.log()
            if (validationRules[key].indexOf(RULES.REQUIRED) > -1 && !input.value.length) {
              removeMessageErrorElement(element)
              addMessageErrorElement(element, key)
            } else {
              removeMessageErrorElement(element)
            }
          });
        })
      }
    })
  }
}

export default MyDirectives