<script setup>
import { useFavoriteStore } from '@/store/favorites'
import { storeToRefs } from 'pinia'

const useFavorites = useFavoriteStore()

const { favorites } = storeToRefs(useFavorites)

const { remove } = useFavorites
</script>
<template>
  <h1>Favoritos</h1>
  <p v-if="favorites.length === 0">Sin Favoritos</p>
  <ul class="list-group">
    <li class="list-group-item" v-for="pokemon in favorites" :key="pokemon.id">
      <div>
        {{ pokemon.name }}
      </div>
      <div>
        <router-link class="btn btn-sm btn-primary" :to="`pokemons/${pokemon.name}`"
          >Mas información</router-link
        >
        <button class="btn btn-sm btn-danger" @click="remove(pokemon.id)">Eliminar</button>
      </div>
    </li>
  </ul>
</template>
