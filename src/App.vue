<script setup>
import { ref } from 'vue'
import BlogPost from './components/BlogPost.vue'
import ButtonCounter from './components/ButtonCounter.vue'

const posts = ref([])

const favorite = ref('')

const changeFavorite = (title) => {
  favorite.value = title
}

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((data) => (posts.value = data))
</script>
<template>
  <div class="container">
    <h1>App</h1>
    <h2>Mis Post Favoritos: {{ favorite }}</h2>
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @changeFavorite="changeFavorite"
    ></BlogPost>
  </div>
</template>
