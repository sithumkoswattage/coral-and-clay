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
  <div class="max-w-5xl mx-auto py-12 px-4 transition-colors">
    <button @click="router.back()" class="mb-8 text-slate-500 dark:text-slate-400 hover:text-orange-600 flex items-center gap-2 font-bold">← Back to Menu</button>
    
    <div v-if="loading" class="animate-pulse h-96 bg-slate-200 dark:bg-slate-800 rounded-3xl"></div>
    
    <div v-else-if="singleRecipe" class="flex flex-col md:flex-row gap-12">
      <div class="w-full md:w-1/2">
        <img :src="singleRecipe.image" class="w-full rounded-[2.5rem] shadow-2xl object-cover h-[500px]" />
      </div>
      <div class="w-full md:w-1/2">
        <span class="text-orange-600 font-bold uppercase tracking-widest text-sm">{{ singleRecipe.cuisine }}</span>
        <h2 class="text-4xl font-extrabold text-slate-900 dark:text-white mt-2 mb-6">{{ singleRecipe.name }}</h2>
        <div class="space-y-6">
          <p class="text-slate-600 dark:text-slate-300 italic">"A local experience of international and local dishes with a calming seaside view."</p>
          <div class="flex gap-8 py-6 border-y border-slate-100 dark:border-slate-800">
            <div class="text-center">
              <p class="text-xs uppercase text-slate-400 font-bold">Rating</p>
              <p class="text-xl font-bold text-slate-900 dark:text-white">⭐ {{ singleRecipe.rating }}</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase text-slate-400 font-bold">Cuisine</p>
              <p class="text-xl font-bold text-slate-900 dark:text-white">{{ singleRecipe.cuisine }}</p>
            </div>
          </div>
          <button @click="handleBookTable" class="w-full bg-gradient-to-r from-warm-clay-600 to-warm-clay-500 text-white py-4 rounded-2xl font-bold hover:shadow-lg hover:shadow-warm-clay-500/40 active:scale-95 transition-all">Book a Seaside Table</button>
        </div>
      </div>
    </div>
  </div>
</template>