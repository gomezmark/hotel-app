<template>
  <v-app>
    <app-nav-bar />
    <v-content>
      <nuxt />
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppNavBar from '~/components/common/AppNavBar.vue'
export default {
  components: {
    AppNavBar
  }
}
</script>
