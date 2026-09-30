<script setup>
import { computed, ref } from 'vue'
import BlogPost from '../components/BlogPost.vue'
import LoadingSpinner from '../components/LoadingSpinner.vue'
import PaginatePost from '../components/PaginatePost.vue'

const posts = ref([])
const inicio = ref(0)
const postXpage = 10
const fin = ref(postXpage)
const loading = ref(true)
const favorite = ref('')

const next = () => {
  inicio.value += postXpage
  fin.value += postXpage
}

const prev = () => {
  inicio.value -= postXpage
  fin.value -= postXpage
}

const fetchData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/')
    posts.value = await response.json()
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

fetchData()

const maxLength = computed(() => posts.value.length)
</script>
<template>
  <LoadingSpinner v-if="loading" />
  <h1>Posts</h1>
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
    @changeFavorite="favorite = $event"
    class="mb-2"
  />
</template>
