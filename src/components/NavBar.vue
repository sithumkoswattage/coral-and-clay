<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDark.value = true;
    document.documentElement.classList.add('dark');
  }
});
</script>

<template>
  <nav class="bg-white/90 dark:bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 p-4 transition-colors duration-300">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
        Corral <span class="text-orange-600 font-medium">&</span> Clay
      </router-link>
      
      <div class="flex items-center gap-6">
        <router-link to="/" class="hidden md:block font-medium text-slate-600 dark:text-slate-300 hover:text-orange-600 transition-colors">
          Menu
        </router-link>

        <button @click="toggleDarkMode" class="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xl hover:scale-110 active:scale-95 transition-all">
          {{ isDark ? '☀️' : '🌙' }}
        </button>
      </div>
    </div>
  </nav>
</template>