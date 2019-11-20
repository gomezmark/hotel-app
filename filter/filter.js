import Vue from 'vue'

Vue.filter('formatDate', (value, format) => {
  let __format = 'YYYY-MM-DD'
  if (typeof format !== 'undefined') {
    __format = format
  }
  if (value) {
    return Vue.moment(value).format(__format)
  }
})
