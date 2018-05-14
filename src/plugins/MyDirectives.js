const MyDirectives = {
  install: function(Vue) {
    Vue.directive('focusOn', {
      inserted: function (element) {
        element.focus()
      }
    });
  }
}

export default MyDirectives