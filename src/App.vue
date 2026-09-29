<template>
  <nav class="navbar navbar-expand bg-body-tertiary mb-4">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Vue App</RouterLink>
      <div class="navbar-nav">
        <RouterLink class="btn btn-outline-primary" to="/">Posts</RouterLink>
        <RouterLink class="btn btn-outline-primary" to="/about">About</RouterLink>
        <RouterLink class="btn btn-outline-primary" to="/pokemons">Pokemons</RouterLink>
      </div>
    </div>
  </nav>
  <main class="container">
    <RouterView />
  </main>
</template>
