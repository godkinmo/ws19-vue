<template>
  <router-link :to="{name: 'posts'}" class="text-grey-darkest no-underline block h-24 bg-white hover:bg-grey-lighter rounded p-4 shadow mb-2">
    #{{ post.id }} {{ postTitle }}
  </router-link>
</template>

<script>
export default {
  props: ['post'],

  computed: {
    postTitle() {
      return this.post.title.substring(0, 1).toUpperCase() + this.post.title.substring(1)
    }
  }
}
</script>
