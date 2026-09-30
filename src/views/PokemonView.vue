<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useGetData } from '@/composables/getData'
import { useFavoriteStore } from '@/store/favorites'

const route = useRoute()
const router = useRouter()
const useFavorites = useFavoriteStore()

const { addFavorites, findPokemon } = useFavorites

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
    <button
      class="btn btn-primary m-2"
      @click="addFavorites(data)"
      :disabled="findPokemon(data.name)"
    >
      Agregar a favoritos
    </button>
  </div>
  <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
