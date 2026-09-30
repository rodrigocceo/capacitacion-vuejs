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

  const findPokemon = (name) => favorites.value.find((item) => item.name === name)

  return {
    favorites,
    addFavorites,
    remove,
    findPokemon,
  }
})
