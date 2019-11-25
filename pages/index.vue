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
                          <v-layout row wrap mx-0 align-center mt-2>
                            <v-icon color="primary">
                              place
                            </v-icon>
                            <span>Destination</span>
                          </v-layout>
                          <v-text-field
                            id="id"
                            name="name"
                            placeholder="Where are you going"
                          />
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap mx-0 relative>
                    <v-flex md6>
                      <v-card>
                        <v-card-text>
                          <p>Check In</p>
                          <search-date :date="selectedDate.start" />
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex md6>
                      <v-card>
                        <v-card-text>
                          <p>Check Out</p>
                          <search-date :date="selectedDate.end" />
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <div class="m-search-date-container">
                      <p>Choose Dates</p>
                      <vue-date-picker
                        v-model="selectedDate"
                        :is-inline="true"
                        is-double-paned
                        mode='range'
                        show-caps>
                      </vue-date-picker>
                    </div>
                  </v-layout>
                  <v-layout row wrap mx-0>
                    <v-flex xs12>
                      <v-card>
                        <v-card-text pa-3>
                          <v-layout row wrap align-center my-1>
                            <v-flex text-sm-center>
                              <p>Rooms</p>
                              <div class="relative">
                                <span class="f-45">{{ rooms }}</span>
                                <v-layout column class="m-search-arrow">
                                  <v-icon size="32" color="primary">keyboard_arrow_up</v-icon>
                                  <v-icon size="32" color="primary">keyboard_arrow_down</v-icon>
                                </v-layout>
                              </div>
                            </v-flex>
                            <v-divider vertical></v-divider>
                            <v-flex text-sm-center>
                              <p>Adult(s)</p>
                              <div class="relative">
                                <span class="f-45">{{ adults }}</span>
                                <v-layout column class="m-search-arrow">
                                  <v-icon size="32" color="primary" @click="updateAdultVal(1)">keyboard_arrow_up</v-icon>
                                  <v-icon size="32" color="primary" @click="updateAdultVal(0)">keyboard_arrow_down</v-icon>
                                </v-layout>
                              </div>
                            </v-flex>
                            <v-divider vertical></v-divider>
                            <v-flex text-sm-center>
                              <p>Child</p>
                              <div class="relative">
                                <span class="f-45">{{ children }}</span>
                                <v-layout column class="m-search-arrow">
                                  <v-icon size="32" color="primary">keyboard_arrow_up</v-icon>
                                  <v-icon size="32" color="primary">keyboard_arrow_down</v-icon>
                                </v-layout>
                              </div>
                            </v-flex>
                          </v-layout>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex xs12>
                      <v-btn
                        depressed
                        block
                        large
                        height="65"
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
// hotels component
import SearchDate from '~/components/hotels/SearchDate.vue'

export default {
  data () {
    return {
      rooms: 1,
      adults: 2,
      children: 0,
      selectedDate: {
        start: this.$moment()._d,
        end: this.$moment().add(1, 'day')._d
      }
    }
  },
  components: {
    PageContainer,
    SearchDate
  },
  methods: {
    updateAdultVal (type) {
      console.log(type)
      if (type === 1 && this.isSearchValid()) {
        this.adults++
      } else if (this.isSearchValid()) {
        this.adults--
      }
    },
    isSearchValid () {
      const isValid = []
      // max pax is 10
      isValid.push((this.adults + this.children) < 10)
      // adults always have a value
      isValid.push(this.adults >= 1)
      // max room = 5
      isValid.push(this.rooms <= 5)

      return !isValid.includes(false)
    }
  }
}
</script>
