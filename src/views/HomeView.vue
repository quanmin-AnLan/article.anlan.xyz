<template>
  <div class="home">
    <quill-editor v-model="content"></quill-editor>
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data () {
    return {
      content: ''
    }
  }
}
</script>
