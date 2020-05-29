<template>
  <div class="page">
    <next-launch v-if="nextLaunch" :launch="nextLaunch"></next-launch>
    <upcoming-launches
      v-if="upcomingLaunches"
      :launches="upcomingLaunches"
    ></upcoming-launches>
  </div>
</template>

<script>
import NextLaunch from '~/components/sections/NextLaunch'
import UpcomingLaunches from '~/components/sections/UpcomingLaunches'
import { getUpcomingLaunches, getPastLaunches } from '~/helpers/launches'

export default {
  components: {
    UpcomingLaunches,
    NextLaunch
  },
  data() {
    return {
      upcomingLaunches: null,
      pastLaunches: null,
      nextLaunch: null
    }
  },
  async asyncData({ $prismic, error }) {
    // Get single document from prismic before page is sent to client
    const document = await $prismic.api.getSingle('home')
    // const launches = await $axios.$get('https://api.spacexdata.com/v3/launches')
    if (document) {
      // Populate the state with the result
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  mounted() {
    this.getUpcoming()
    this.getPast()
  },
  methods: {
    async getUpcoming() {
      this.upcomingLaunches = await getUpcomingLaunches(this)
      this.nextLaunch = this.upcomingLaunches[0]
    },
    async getPast() {
      this.pastLaunches = await getPastLaunches(this, { limit: 10 })
    }
  }
}
</script>

<style></style>
