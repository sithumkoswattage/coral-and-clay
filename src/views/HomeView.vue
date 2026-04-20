<script setup lang="ts">
import { onMounted } from 'vue';
import { useApi } from '../composables/useApi';

const { filteredRecipes, searchQuery, selectedCategory, loading, error, fetchRecipes } = useApi();

onMounted(() => { fetchRecipes(); });

const categories = ['All', 'Italian', 'Asian', 'Mexican', 'Indian', 'Pakistani', 'Japanese'];
</script>

<template>
  <div class="min-h-screen pb-20 transition-colors duration-300">
    <header class="relative h-[45vh] flex items-center justify-center bg-warm-clay-800 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2070')] bg-cover bg-center"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-warm-clay-900/70 to-warm-clay-700/50"></div>
      <div class="relative text-center px-4 z-10">
        <h2 class="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wide">Corral & Clay</h2>
        <p class="text-xl text-warm-clay-50 font-light max-w-xl mx-auto">Local Sri Lankan experience meets international culinary excellence.</p>
      </div>
    </header>

    <section class="max-w-7xl mx-auto px-4 -mt-10 relative z-10">
      <div class="flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 transition-colors">
        <div class="w-full md:w-2/3 relative">
          <input v-model="searchQuery" type="text" placeholder="Search our menu..." class="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-orange-500 outline-none dark:bg-slate-900 dark:text-white" />
          <span class="absolute left-4 top-4 text-xl opacity-40">🔍</span>
        </div>
        <div class="w-full md:w-1/3 flex items-center gap-3">
          <select v-model="selectedCategory" class="w-full px-5 py-4 rounded-2xl border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-orange-500 outline-none dark:bg-slate-900 dark:text-white">
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
      </div>

      <div v-if="loading" class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div v-for="i in 6" :key="i" class="animate-pulse bg-slate-200 dark:bg-slate-700 h-[450px] rounded-3xl"></div>
      </div>

      <div v-else-if="filteredRecipes.length > 0" class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="dish in filteredRecipes" :key="dish.id" class="group bg-white dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700 flex flex-col">
          <div class="h-64 overflow-hidden relative">
            <img :src="dish.image" :alt="dish.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute bottom-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-orange-600 uppercase">{{ dish.cuisine }}</div>
          </div>
          <div class="p-8 flex-grow flex flex-col">
            <div class="flex justify-between items-start mb-3">
              <h4 class="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">{{ dish.name }}</h4>
              <span class="text-sm font-bold text-slate-600 dark:text-slate-400">⭐ {{ dish.rating }}</span>
            </div>
            <router-link :to="{ name: 'dish-detail', params: { id: dish.id } }" class="mt-auto block w-full text-center py-4 bg-slate-900 dark:bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all">Explore Dish</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>