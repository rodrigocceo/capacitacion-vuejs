<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '@/composables/getData'

const route = useRoute()
const router = useRouter()

const back = () => {
  router.push('/pokemons')
}

const { data, getData, loading, error } = useGetData()

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>
<template>
  <p v-if="loading">Cargando informacion</p>
  <div class="alert alert-danger mt-2" v-if="error">No existe el pokemon</div>
  <div class="pokemon" v-if="data">
    <img :src="data.sprites?.front_default" alt="" />
    <h1>Pokemon name: {{ $route.params.name }}</h1>
  </div>
  <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
