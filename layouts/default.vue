<template>
  <v-app>
    <app-nav-bar />
    <v-content>
      <nuxt />
    </v-content>

    <v-footer
      color="grey"
      dark
    >
      <v-layout row wrap justify-center>
        &copy; 2019. Allrights Reserved
      </v-layout>
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
