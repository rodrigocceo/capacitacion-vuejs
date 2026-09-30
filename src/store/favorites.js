import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorites', () => {
  const favorites = ref([])

  const addFavorites = (pokemon) => {
    favorites.value.push(pokemon)
  }

  return {
    favorites,
    addFavorites,
  }
})
