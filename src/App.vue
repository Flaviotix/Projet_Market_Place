<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <header>
    <NavBar msg="Stacking NFT" />
  </header>

  <main>
    <h4>Hello there</h4>
  </main>
</template>

<style scoped>
 header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }


</style>
