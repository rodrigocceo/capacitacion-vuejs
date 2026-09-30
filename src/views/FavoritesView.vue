<script setup>
import { useFavoriteStore } from '@/store/favorites'
import { storeToRefs } from 'pinia'

const useFavorites = useFavoriteStore()

const { favorites } = storeToRefs(useFavorites)
</script>
<template>
  <h1>Favoritos</h1>
  <p v-if="favorites.length === 0">Sin Favoritos</p>
  <ul class="list-group">
    <li class="list-group-item" v-for="pokemon in favorites" :key="pokemon.id">
      {{ pokemon.name }}
    </li>
  </ul>
</template>
