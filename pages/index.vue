<template>
  <div v-if="document">
    <hero />
    <prismic-img :img="document.data.hero_image" />
    <app-input label="Input label" name="input-test" />
    <app-textarea label="Textarea label" name="textarea-test" />
  </div>
</template>

<script>
import Hero from '~/components/sections/Hero.vue'
import PrismicImg from '~/components/shared/PrismicImg.vue'
import Input from '~/components/form/Input.vue'
import Textarea from '~/components/form/Textarea.vue'

export default {
  components: {
    Hero,
    PrismicImg,
    'app-input': Input,
    'app-textarea': Textarea
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
