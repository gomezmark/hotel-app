<template>
  <v-layout
    row
    wrap
    mx-0
    mb-2
    align-center>
    <span class="f-45">{{ date | formatDate('DD') }}</span>
    <div class="mx-2">
      <span>{{ date | formatDate('MMM \'YY') }}</span>
      <span class="d-block">{{ date | formatDate('ddd') }}</span>
    </div>
    <div>
      <v-icon
        color="primary"
        disabled
        left
        right
        :size="40">
        calendar_today
      </v-icon>
    </div>
  </v-layout>
</template>

<script>
export default {
  props: {
    date: {
      type: Date,
      required: true
    }
  }
}
</script>
