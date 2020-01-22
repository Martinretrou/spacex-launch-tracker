<template>
  <div v-if="document">
    <hero
      :title="document.data.hero_title[0].text"
      :description="document.data.hero_description[0].text"
    />
    <available-components :data="document.data" />
  </div>
</template>

<script>
import Hero from '~/components/sections/Hero.vue'
import AvailableComponents from '~/components/sections/AvailableComponents.vue'

export default {
  components: {
    Hero,
    AvailableComponents
  },
  data() {
    return {
      textValue: null,
      textareaValue: null
    }
  },
  async asyncData({ $prismic, error }) {
    // Get single document from prismic before page is sent to client
    const document = await $prismic.api.getSingle('home')
    if (document) {
      // Populate the state with the result
      return { document }
    } else {
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style></style>
