<template>
  <div>
    <div class="m-search-box">
      <page-container>
        <v-card my-5 >
          <v-card-text>
            <v-container grid-list-md>
              <v-layout row wrap align-center>
                <v-flex md6 xs12>
                  <v-text-field
                    name="name"
                    label="label"
                    id="id"
                  />
                </v-flex>
                <v-flex md2 xs6>
                  <v-layout row wrap>
                    <span>{{ checkin | formatDate('ddd, MMM DD') }}</span>
                    <span class="mx-3">|</span>
                    <span>{{ checkout | formatDate('ddd, MMM DD') }}</span>
                  </v-layout>
                </v-flex>
                <v-flex md2 xs6>
                  <v-layout row wrap>
                    <v-icon>mdi-anchor</v-icon>
                    <span>{{ rooms }}</span>
                    <span>Rooms</span>
                    <span>{{ adults }}</span>
                    <span>Adults</span>
                  </v-layout>
                </v-flex>
                <v-flex md2 xs12>
                  <v-btn
                    depressed
                    block
                    color="success">Search</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </page-container>
    </div>
  </div>
</template>

<script>
import PageContainer from '~/components/tools/PageContainer.vue'

export default {
  data () {
    return {
      rooms: 1,
      adults: 2,
      checkin: new Date(),
      checkout: new Date()
    }
  },
  components: {
    PageContainer
  }
}
</script>
