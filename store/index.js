import Vuex from 'vuex'

import state from './state.js'

export default () => {
  return new Vuex.Store({
    namespaced: true,
    state
  })
}
