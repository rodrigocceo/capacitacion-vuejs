import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFavoriteStore = defineStore('favorites', () => {
  const favorites = ref([])

  const addFavorites = (pokemon) => {
    favorites.value.push(pokemon)
  }

  const remove = (id) => {
    favorites.value = favorites.value.filter((item) => item.id !== id)
  }

  return {
    favorites,
    addFavorites,
    remove,
  }
})
