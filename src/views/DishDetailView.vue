<script setup lang="ts">
import { onMounted, inject } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '../composables/useApi';

const route = useRoute();
const router = useRouter();
const { singleRecipe, loading, fetchRecipeById } = useApi();
const handleBookTable = inject<() => void>('handleBookTable', () => {});

onMounted(() => { fetchRecipeById(route.params.id as string); });
</script>

<template>
  <div class="max-w-5xl mx-auto py-8 sm:py-12 px-4 sm:px-6 transition-colors">
    <button @click="router.back()" class="mb-6 sm:mb-8 text-slate-500 dark:text-slate-400 hover:text-orange-600 flex items-center gap-2 font-bold text-sm sm:text-base transition-colors">← Back to Menu</button>
    
    <div v-if="loading" class="animate-pulse h-64 sm:h-96 bg-slate-200 dark:bg-slate-800 rounded-2xl sm:rounded-3xl"></div>
    
    <div v-else-if="singleRecipe" class="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12">
      <div class="w-full md:w-1/2">
        <img :src="singleRecipe.image" :alt="singleRecipe.name" class="w-full rounded-2xl sm:rounded-[2.5rem] shadow-2xl object-cover h-64 sm:h-80 md:h-[500px]" loading="lazy" />
      </div>
      <div class="w-full md:w-1/2">
        <span class="text-orange-600 font-bold uppercase tracking-widest text-xs sm:text-sm">{{ singleRecipe.cuisine }}</span>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-4 sm:mb-6 line-clamp-3">{{ singleRecipe.name }}</h2>
        <div class="space-y-6">
          <p class="text-slate-600 dark:text-slate-300 italic text-sm sm:text-base">"A local experience of international and local dishes with a calming seaside view."</p>
          <div class="flex gap-6 sm:gap-8 py-4 sm:py-6 border-y border-slate-100 dark:border-slate-800">
            <div class="text-center">
              <p class="text-xs uppercase text-slate-400 font-bold tracking-wide">Rating</p>
              <p class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">⭐ {{ singleRecipe.rating }}</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase text-slate-400 font-bold tracking-wide">Cuisine</p>
              <p class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1">{{ singleRecipe.cuisine }}</p>
            </div>
          </div>
          <button @click="handleBookTable" class="w-full bg-gradient-to-r from-warm-clay-600 to-warm-clay-500 text-white py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-warm-clay-500/40 active:scale-95 transition-all">Book a Seaside Table</button>
        </div>
      </div>
    </div>
  </div>
</template>