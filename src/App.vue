<script setup lang="ts">
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="antialiased">
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>