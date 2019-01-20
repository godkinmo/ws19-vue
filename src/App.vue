<template>
  <div id="app" class="p-4 bg-grey-lightest min-h-screen">
    <div class="container mx-auto text-center my-8">
      <router-link :to="{ name: 'posts' }">Posts</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style src="./assets/css/app.css"></style>