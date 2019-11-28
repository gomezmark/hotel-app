import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#5398d9',
        secondary: '#d96b0c',
        tertiary: '#a53a3b',
        accent: '#f4e3b1',
        gray: '#b3b3b3',
        error: '#b71c1c',
        text: '#4d4d4d',
        loader: '#F0EEEE'
      }
    }
  }
})
