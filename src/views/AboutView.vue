<script setup>
import { useCounterStore } from '@/store/counter'
import { storeToRefs } from 'pinia'

const useCounter = useCounterStore()

const { increment } = useCounter
const { double, count } = storeToRefs(useCounter)
</script>

<template>
  <div class="about">
    <h1>Home Counter: {{ count }}</h1>
    <h2>Double: {{ double }}</h2>
    <button @click="increment">Increment</button>
  </div>
</template>

<style>
@media (mid-whidth: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
