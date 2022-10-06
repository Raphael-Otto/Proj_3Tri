<script setup>
import HeaderComp from "@/components/HeaderComp.vue";
import FilmesViews from "@/views/FilmesViews.vue";
</script>

<template>
  <HeaderComp />
  <main>
    <FilmesViews />
    <RouterView />
  </main>
</template>

<style>
@import "@/assets/base.css";
#app {
  max-width: auto;
  margin: 0 auto;
  /* padding: 2rem; */
  height: 100vh;
  font-weight: normal;
}
main {
  min-height: 30%;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
