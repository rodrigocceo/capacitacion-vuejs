<script setup>
import { computed, onMounted, ref } from 'vue'
import BlogPost from './components/BlogPost.vue'
import ButtonCounter from './components/ButtonCounter.vue'
import PaginatePost from './components/PaginatePost.vue'
import LoadingSpinner from './components/LoadingSpinner.vue'

const posts = ref([])
const inicio = ref(0)
const postXpage = 10
const fin = ref(postXpage)
const loading = ref(true)

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

const fetchData = async () => {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    posts.value = await res.json()
  } catch (e) {
    console.log(e)
  } finally {
    loading.value = false
  }
}

fetchData()

const maxLength = computed(() => posts.value.length)
</script>
<template>
  <LoadingSpinner v-if="loading" />
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
