<script setup>
const props = defineProps(['inicio', 'fin', 'maxLength'])
const emit = defineEmits(['next', 'prev'])
</script>
<template>
  <div class="btn-group" role="group" aria-label="Basic Example">
    <button @click="emit('prev')" class="btn btn-outline-primary" :disabled="inicio === 0">
      Previus
    </button>
    <button @click="emit('next')" class="btn btn-outline-primary" :disabled="fin >= maxLength">
      Next
    </button>
  </div>
</template>
