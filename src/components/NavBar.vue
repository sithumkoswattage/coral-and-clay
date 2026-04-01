<script setup lang="ts">
// Using RouterLink ensures the page doesn't refresh when clicking links
</script>

<template>
  <nav class="bg-white/90 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50 p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <router-link to="/" class="text-2xl font-bold text-slate-900 tracking-tight">
        Corral <span class="text-orange-600 font-medium">&</span> Clay
      </router-link>
      
      <div class="flex items-center gap-6 font-medium text-slate-600">
        <router-link to="/" class="hover:text-blue-600 transition-colors">Menu</router-link>
        <span class="text-slate-300">|</span>
        <span class="text-sm text-slate-500 italic">Galle Fort</span>
      </div>
    </div>
  </nav>
</template>