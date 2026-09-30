<template>
  <nav class="navbar navbar-expand mb-4 bg-dark nav-var-dark">
    <div class="container">
      <RouterLink class="navbar-brand text-light" to="/"
        ><img src="/public/favicon.ico" alt="" />PokeAPI</RouterLink
      >
      <div class="navbar-nav">
        <RouterLink class="btn btn-outline-primary" to="/">Posts</RouterLink>
        <RouterLink class="btn btn-outline-primary" to="/about">About</RouterLink>
        <RouterLink class="btn btn-outline-primary" to="/pokemons">Pokemons</RouterLink>
        <RouterLink class="btn btn-outline-primary" to="/favorites">Favorites</RouterLink>
      </div>
    </div>
  </nav>
  <main class="container text-center">
    <RouterView />
  </main>
</template>
