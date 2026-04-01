<script setup lang="ts">
import { ref } from 'vue';

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
</script>

<template>
  <nav class="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 p-4 transition-colors">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-slate-900 dark:text-white">
        Corral <span class="text-orange-600">&</span> Clay
      </router-link>
      
      <div class="flex items-center gap-4">
        <button @click="toggleDarkMode" class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-xl">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
        <router-link to="/" class="hover:text-blue-600 dark:text-slate-300">Menu</router-link>
      </div>
    </div>
  </nav>
</template>