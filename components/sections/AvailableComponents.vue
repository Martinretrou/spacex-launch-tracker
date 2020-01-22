<template>
  <section class="section">
    <h2>Available components in this template</h2>
    <h3>Prismic related components</h3>
    <div class="two-cols">
      <p>
        Prismic image component, takes a prismic image object and displays the
        image with the correct alt tag
      </p>
      <prismic-img :img="data.hero_image" />
    </div>
    <div class="two-cols">
      <p>
        Prismic text component, handle formatted text from prismic Rich Text
        Field (headings, formatting, image, etc.).
      </p>
      <prismic-text :text="data.formatted_text" />
    </div>
    <h3>Form components</h3>
    <div class="two-cols">
      <p>
        Input component
      </p>
      <app-input v-model="textValue" label="Input label" name="input-test" />
    </div>
    <div class="two-cols">
      <p>
        Textarea component
      </p>
      <app-textarea
        v-model="textareaValue"
        label="Textarea label"
        name="textarea-test"
      />
    </div>
    <div class="two-cols">
      <p>
        Checkboxes component
      </p>
      <app-checkbox
        @on-change="logCheckboxChanges($event)"
        v-model="checked"
        :options="checkboxesOptions"
      />
    </div>
  </section>
</template>

<script>
// Shared
import PrismicImg from '~/components/shared/PrismicImg.vue'
import PrismicText from '~/components/shared/PrismicText.vue'
// Form
import Input from '~/components/form/Input.vue'
import Textarea from '~/components/form/Textarea.vue'
import Checkbox from '~/components/form/Checkbox.vue'

export default {
  name: 'AvailableComponents',
  components: {
    PrismicImg,
    PrismicText,
    'app-checkbox': Checkbox,
    'app-input': Input,
    'app-textarea': Textarea
  },
  props: {
    data: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  data() {
    return {
      textareaValue: null,
      textValue: null,
      checked: [],
      checkboxesOptions: [
        { value: 'Value test 1', label: 'Label test 1', name: 'checkbox-test' },
        { value: 'Value test 2', label: 'Label test 2', name: 'checkbox-test' },
        { value: 'Value test 3', label: 'Label test 3', name: 'checkbox-test' }
      ]
    }
  },
  methods: {
    logCheckboxChanges(event) {
      console.log(event)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  padding: 0 10vw;
  h3 {
    margin: 10% 0 20px 0;
    opacity: 0.7;
  }
  .two-cols {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-gap: 20px;
    align-items: center;
    margin-top: 10%;
  }
}
</style>
