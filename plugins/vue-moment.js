import Vue from 'vue'
import VueMoment from 'vue-moment'

Vue.use(VueMoment)

export default ({ store }) => {
  Vue.moment.locale(store.state.locale)
}
