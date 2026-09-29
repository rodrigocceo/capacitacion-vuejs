<script setup>
import { computed, ref } from 'vue'
import BlogPost from './components/BlogPost.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import PaginatePost from './components/PaginatePost.vue'

const posts = ref([])
const inicio = ref(0)
const postXpage = 10
const fin = ref(postXpage)

const next = () => {
  inicio.value = inicio.value + postXpage
  fin.value = fin.value + postXpage
}

const prev = () => {
  inicio.value = inicio.value - postXpage
  fin.value = fin.value - postXpage
}

const favorite = ref('')

const changeFavorite = (title) => {
  favorite.value = title
}

fetch('https://jsonplaceholder.typicode.com/posts/')
  .then((response) => response.json())
  .then((data) => (posts.value = data))

const maxLength = computed(() => posts.value.length)
</script>
<template>
  <div class="container">
    <h1>App</h1>
    <h2>Mis Post Favoritos: {{ favorite }}</h2>
    <PaginatePost
      @next="next"
      @prev="prev"
      :inicio="inicio"
      :fin="fin"
      :maxLength="maxLength"
      class="mb-2"
    />
    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @changeFavorite="changeFavorite"
      class="mb-2"
    ></BlogPost>
  </div>
</template>
