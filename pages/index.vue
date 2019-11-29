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
                            <v-icon
                              color="secondary"
                            >
                              place
                            </v-icon>
                            <span class="bold">Destination</span>
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
                      <v-card @click="toggleCalendar = !toggleCalendar">
                        <v-card-text>
                          <p>Check In</p>
                          <no-ssr>
                            <search-date :date="selectedDate.start" />
                          </no-ssr>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <v-flex md6>
                      <v-card @click="toggleCalendar = !toggleCalendar">
                        <v-card-text>
                          <p>Check Out</p>
                          <search-date :date="selectedDate.end" />
                        </v-card-text>
                      </v-card>
                    </v-flex>
                    <div
                      :class="{ 'active': toggleCalendar }"
                      class="m-search-date-container"
                    >
                      <p>Choose Dates</p>
                      <vue-date-picker
                        v-model="selectedDate"
                        :is-inline="true"
                        is-double-paned
                        mode="range"
                        show-caps
                      ></vue-date-picker>
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
                                  <v-icon
                                    size="32"
                                    color="secondary"
                                  >
                                    keyboard_arrow_up
                                  </v-icon>
                                  <v-icon
                                    size="32"
                                    color="secondary"
                                  >
                                    keyboard_arrow_down
                                  </v-icon>
                                </v-layout>
                              </div>
                            </v-flex>
                            <v-divider vertical></v-divider>
                            <v-flex text-sm-center>
                              <p>Adult(s)</p>
                              <div class="relative">
                                <span class="f-45">{{ adults }}</span>
                                <v-layout column class="m-search-arrow">
                                  <v-icon
                                    size="32"
                                    color="secondary"
                                    @click="updateAdultVal(1)"
                                  >
                                    keyboard_arrow_up
                                  </v-icon>
                                  <v-icon
                                    size="32"
                                    color="secondary"
                                    @click="updateAdultVal(0)"
                                  >
                                    keyboard_arrow_down
                                  </v-icon>
                                </v-layout>
                              </div>
                            </v-flex>
                            <v-divider vertical></v-divider>
                            <v-flex text-sm-center>
                              <p>Child</p>
                              <div class="relative">
                                <span class="f-45">{{ children }}</span>
                                <v-layout column class="m-search-arrow">
                                  <v-icon
                                    size="32"
                                    color="secondary"
                                  >
                                    keyboard_arrow_up
                                  </v-icon>
                                  <v-icon
                                    size="32"
                                    color="secondary"
                                  >
                                    keyboard_arrow_down
                                  </v-icon>
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
                        color="secondary">
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
    <div class="white">
      <page-container class="my-5">
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 text-sm-center>
              <p class="headline primary--text">Top Destination</p>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <template v-for="(destination, key) in destinations">
              <v-flex
                :key="`destination-${key}`"
                md4>
                <v-card>
                  <v-img
                    :src='destination.src'
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                  >
                    <v-card-title v-text="destination.place"></v-card-title>
                  </v-img>
                </v-card>
              </v-flex>
            </template>
          </v-layout>
        </v-container>
      </page-container>
    </div>
    <!--  -->
    <div class="primary">
      <v-parallax
        dark
        src="/images/discover.jpg"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <page-container>
              <v-layout row wrap my-5 justify-center>
                <v-flex xs12 md7>
                  <p class="text-sm-center headline white--text">Discover New Attractions</p>
                  <p class="text-sm-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere tortor sem, a posuere nibh porttitor sit amet. Aliquam tempor maximus sem, pellentesque rhoncus diam lacinia finibus. Praesent volutpat leo lectus. Aenean lobortis nibh justo, quis pretium purus imperdiet vel. Praesent a diam posuere leo tincidunt ultrices in sed est</p>
                  <v-btn
                    color="white"
                    depressed
                    large
                  >
                    Get Started
                  </v-btn>
                </v-flex>
              </v-layout>
            </page-container>
          </v-col>
        </v-row>
      </v-parallax>
    </div>
    <!--  -->
    <div>
      <page-container class="my-5">
        <v-layout row wrap justify-center>
          <v-flex md8>
            <p class="headline text-sm-center">
              Why Choose Us
            </p>
          </v-flex>
          <v-flex md8>
            <v-container grid-list-xl>
              <v-layout row wrap justify-center>
                <template v-for="item in 3">
                  <v-flex
                    md4
                    :key="`sol-${item}`">
                    <v-card>
                      <v-card-text>
                        <v-icon>hotel</v-icon>
                        <p>Multiple Properties</p>
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </template>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </page-container>
    </div>
    <div class="secondary dark--theme">
      <page-container class="my-5">
        <v-layout dark row wrap align-center>
          <v-flex md7>
            <p class="headline white--text">Download the APP Now!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras posuere tortor sem, a posuere nibh porttitor sit amet. Aliquam tempor maximus sem, pellentesque rhoncus diam lacinia finibus. </p>
          </v-flex>
          <v-flex md4>
            <v-layout row wrap>
              <v-img
                max-height="60"
                max-width="160"
                contain
                src="/images/google.png"></v-img>
              <v-img
                max-height="60"
                max-width="120"
                contain
                src="/images/app-store.png"></v-img>
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
      toggleCalendar: false,
      selectedDate: {
        start: this.$moment()._d,
        end: this.$moment().add(1, 'day')._d
      },
      destinations: [
        {
          place: 'London',
          src: '/images/london.jpg'
        },
        {
          place: 'Japan',
          src: '/images/japan.jpg'
        },
        {
          place: 'Maldives',
          src: '/images/maldives.jpg'
        }
      ]
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
