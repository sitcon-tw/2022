<template>
  <div class="🥞markdown-parser" v-html="parsed_content" />
</template>
<script>
import showdown from 'showdown'
export default {
  name: 'Markdown',
  props: {
    content: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      parsed_content: ''
    }
  },
  created() {
    this.parsed_content = this.content
    this.parsed_content = this.parse(this.content)
  },
  methods: {
    parse(content) {
      const converter = new showdown.Converter()
      return converter.makeHtml(content)
    }
  }
}

</script>
<style lang="sass">
.🥞markdown-parser
  p
    margin-top: 0
</style>