<script setup>
import { RouterLink } from 'vue-router'
import { useGetData } from '@/composables/getData'

const { data, getData, loading, error } = useGetData()

getData('https://pokeapi.co/api/v2/pokemon/')
</script>
<template>
  <h1>Pokemons</h1>
  <p v-if="loading">Cargando informacion</p>
  <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
  <div v-if="data">
    <ul>
      <li v-for="pokemon in data.results">
        <router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
      </li>
    </ul>
    <button :disabled="!data.previous" class="btn btn-warning me-2" @click="getData(data.previous)">
      Previous
    </button>
    <button class="btn btn-primary" @click="getData(data.next)">Next</button>
  </div>
</template>
