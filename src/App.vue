<script setup>
import { ref } from 'vue'
import BlogPost from './components/BlogPost.vue'
import ButtonCounter from './components/ButtonCounter.vue'

const posts = ref([
  { title: 'Post 1', id: 1, body: 'Descripcion 1' },
  { title: 'Post 2', id: 2, body: 'Descripcion 2' },
  { title: 'Post 3', id: 3 },
])
</script>
<template>
  <div class="container">
    <h1>App</h1>
    <ButtonCounter />
    <BlogPost
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
    ></BlogPost>
  </div>
</template>
