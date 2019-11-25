<template>
  <div>
    <div class="m-search-box">
      <page-container>
        <v-layout row wrap justify-center>
          <v-flex md8 xs12>
            <v-layout row wrap class="m-search-container">
              <v-flex md5>
                <v-container grid-list-xl class="px-0">
                  <v-layout row wrap mx-0>
                    <v-flex xs12>
                      <v-card>
                        <v-card-text>
                          <v-text-field
                            id="id"
                            name="name"
                            label="label"
                          />
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex md6>
                      <v-card>
                        <v-card-text>
                          <p>Check In</p>
                          <v-layout row wrap>
                            <span>{{ checkin | formatDate('DD') }}</span>
                            <div>
                              <span>{{ checkin | formatDate('MMM \'YY') }}</span>
                              <span class="d-block">{{ checkin | formatDate('ddd') }}</span>
                            </div>
                            <div>
                              <v-icon
                                color="primary"
                                dark
                                light
                                disabled
                                x-large
                                large
                                medium
                                small
                                left
                                right
                              >
                                calendar
                              </v-icon>
                            </div>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex md6>
                      <v-card>
                        <v-card-text>
                          <span>{{ checkout | formatDate('ddd, MMM DD') }}</span>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12>
                      <v-card>
                        <v-card-text pa-3>
                          <v-icon>mdi-anchor</v-icon>
                          <span>{{ rooms }}</span>
                          <span>Rooms</span>
                          <span>{{ adults }}</span>
                          <span>Adults</span>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12>
                      <v-btn
                        depressed
                        block
                        large
                        color="success">
                        Search
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
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
