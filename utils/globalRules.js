import Vue from 'vue'

Vue.mixin({
  data () {
    return {
      global: {
        rules: {
          required: [
            v => !!v || 'Field is required'
          ],
          destination: [
            v => !!v || 'Destination is required'
          ],
          email: [
            v => !!v || 'Email is required'
          ]
        }
      }
    }
  }
})
