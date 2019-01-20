<template>
  <div ref="posts" class="container mx-auto">
    <transition-group name="fade">
      <post-item v-for="post in posts" :key="post.id" :post="post">
      </post-item>
    </transition-group>

    <div v-if="loading">loading...</div>
  </div>
</template>

<script>
import PostItem from './PostItem.vue'
import { throttle } from 'lodash'

export default {
  components: {
    PostItem,
  },

  data() {
    return {
      posts: [],
      page: 1,
      loading: false,
      noMoreResult: false,
    }
  }, 

  mounted() {
    this.getPosts()

    window.addEventListener('scroll', this.loadMoreResult)
  },

  watch: {
    page() {
      this.getPosts()
    }
  },

  methods: {
    getPosts() {
      if (this.loading || this.noMoreResult) {
        return
      }

      this.loading = true

      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${this.page}`)
        .then(response => {
          return response.json();
        })
        .then(data => {
          if (data.length === 0) {
            this.noMoreResult = true
          }

          data.forEach((post, i) => {
              setTimeout(() => {
                this.posts.push(post)
              }, i*300)
          })

          this.loading = false
        })
    },
    loadMoreResult: throttle(function() {
      if (this.shouldLoadMore()) {
        this.page++
      }
    }, 200),

    shouldLoadMore() {
      return (
        !this.loading &&
        !this.noMoreResult &&
        (
          window.pageYOffset + window.innerHeight >=
          ((this.$refs.posts.offsetHeight + this.$refs.posts.offsetTop) * 0.7)
        )
      )
    }
  },
}
</script>


<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>