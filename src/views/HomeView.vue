<script setup lang="ts">
import { onMounted } from 'vue';
import { useApi } from '../composables/useApi';

const { filteredRecipes, searchQuery, selectedCategory, loading, error, fetchRecipes } = useApi();

onMounted(() => { fetchRecipes(); });

const categories = ['All', 'Italian', 'Asian', 'Mexican', 'Indian', 'Pakistani', 'Japanese'];
</script>

<template>
  <div class="min-h-screen pb-20 transition-colors duration-300">
    <!-- Hero Header -->
    <header class="relative h-[40vh] sm:h-[45vh] flex items-center justify-center bg-warm-clay-800 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2070')] bg-cover bg-center" style="animation: backgroundShimmer 4s ease-in-out infinite;"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-warm-clay-900/70 to-warm-clay-700/50"></div>
      <div class="relative text-center px-4 z-10">
        <h2 class="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-3 sm:mb-4 tracking-wide" style="animation: titleShimmer 1s ease-out;">Coral & Clay</h2>
        <p class="text-base sm:text-lg md:text-xl text-warm-clay-50 font-light max-w-2xl mx-auto" style="animation: subtitleFade 1s ease-out 0.3s backwards;">Local Sri Lankan experience meets international culinary excellence.</p>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
      <!-- Welcome Section -->
      <section class="mt-12 sm:mt-16 md:mt-20 mb-12 sm:mb-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-center">
          <!-- Welcome Text -->
          <div class="md:col-span-2 space-y-4 sm:space-y-5" style="animation: fadeInUp 0.8s ease-out;">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-warm-clay-50 leading-tight">
              More Than a Meal
            </h2>
            <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              At Coral & Clay, we believe dining is about creating memories. Our warm, welcoming atmosphere brings together the flavors of Sri Lanka with culinary traditions from around the world.
            </p>
            <div class="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div class="flex items-start gap-3" style="animation: fadeInUp 0.8s ease-out 0.1s backwards;">
                <span class="text-2xl sm:text-3xl flex-shrink-0">💫</span>
                <div class="min-w-0">
                  <h3 class="font-semibold text-slate-900 dark:text-white text-sm">Warm Hospitality</h3>
                  <p class="text-xs text-slate-600 dark:text-slate-400">Every guest is family</p>
                </div>
              </div>
              <div class="flex items-start gap-3" style="animation: fadeInUp 0.8s ease-out 0.2s backwards;">
                <span class="text-2xl sm:text-3xl flex-shrink-0">🍽️</span>
                <div class="min-w-0">
                  <h3 class="font-semibold text-slate-900 dark:text-white text-sm">Authentic Flavors</h3>
                  <p class="text-xs text-slate-600 dark:text-slate-400">Rooted in tradition</p>
                </div>
              </div>
              <div class="flex items-start gap-3" style="animation: fadeInUp 0.8s ease-out 0.3s backwards;">
                <span class="text-2xl sm:text-3xl flex-shrink-0">🌟</span>
                <div class="min-w-0">
                  <h3 class="font-semibold text-slate-900 dark:text-white text-sm">Shared Moments</h3>
                  <p class="text-xs text-slate-600 dark:text-slate-400">Creating memories</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Welcome Image -->
          <div class="relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg" style="animation: fadeInUp 0.8s ease-out 0.2s backwards;">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1470"
              alt="Warm restaurant ambiance"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-warm-clay-900/30 to-transparent"></div>
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="flex items-center gap-4 my-12 sm:my-14 md:my-16" style="animation: fadeInUp 0.8s ease-out 0.3s backwards;">
        <div class="flex-1 h-px bg-gradient-to-r from-transparent to-warm-clay-300 dark:to-warm-clay-700"></div>
        <span class="text-warm-clay-600 dark:text-warm-clay-400 text-xl sm:text-2xl flex-shrink-0" style="animation: gentle-float 3s ease-in-out infinite;">✦</span>
        <div class="flex-1 h-px bg-gradient-to-l from-transparent to-warm-clay-300 dark:to-warm-clay-700"></div>
      </div>

      <!-- Menu Section -->
      <div class="mb-10 sm:mb-12" style="animation: fadeInUp 0.8s ease-out 0.4s backwards;">
        <h2 class="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-slate-900 dark:text-warm-clay-50 text-center mb-3 sm:mb-4">Explore Our Menu</h2>
        <p class="text-center text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">Discover our carefully curated selection of dishes, each telling a story of flavor, tradition, and innovation.</p>
      </div>

      <!-- Search & Filter Bar -->
      <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-white dark:bg-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 dark:border-slate-700 transition-colors mb-10 sm:mb-12 md:mb-16" style="animation: fadeInUp 0.8s ease-out 0.5s backwards;">
        <div class="w-full sm:flex-1 relative">
          <input v-model="searchQuery" type="text" placeholder="Search menu..." class="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-warm-clay-600 outline-none dark:bg-slate-900 dark:text-white transition-all text-sm sm:text-base" />
          <span class="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-lg opacity-40">🔍</span>
        </div>
        <select v-model="selectedCategory" class="w-full sm:w-auto px-3 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-600 focus:ring-2 focus:ring-warm-clay-600 outline-none dark:bg-slate-900 dark:text-white transition-all text-sm sm:text-base cursor-pointer">
          <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
        </select>
      </div>

      <!-- Recipes Grid -->
      <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div v-for="i in 6" :key="i" class="animate-pulse bg-slate-200 dark:bg-slate-700 h-80 sm:h-96 rounded-2xl sm:rounded-3xl"></div>
      </div>

      <div v-else-if="filteredRecipes.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
        <div v-for="(dish, index) in filteredRecipes" :key="dish.id" class="group bg-white dark:bg-slate-800 rounded-2xl sm:rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-slate-100 dark:border-slate-700 flex flex-col" :style="{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }">
          <div class="h-48 sm:h-64 overflow-hidden relative">
            <img :src="dish.image" :alt="dish.name" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
            <div class="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs font-bold text-warm-clay-600 dark:text-warm-clay-400 uppercase">{{ dish.cuisine }}</div>
          </div>
          <div class="p-4 sm:p-6 md:p-8 flex-grow flex flex-col">
            <div class="flex justify-between items-start mb-2 sm:mb-3 gap-2">
              <h4 class="text-lg sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight line-clamp-2">{{ dish.name }}</h4>
              <span class="text-xs sm:text-sm font-bold text-slate-600 dark:text-slate-400 flex-shrink-0">⭐ {{ dish.rating }}</span>
            </div>
            <router-link :to="{ name: 'dish-detail', params: { id: dish.id } }" class="mt-auto block w-full text-center py-3 sm:py-4 bg-gradient-to-r from-warm-clay-600 to-warm-clay-500 text-white rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base hover:shadow-lg hover:shadow-warm-clay-500/40 active:scale-95 transition-all">Explore Dish</router-link>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && filteredRecipes.length === 0" class="text-center py-16 sm:py-20">
        <p class="text-slate-500 dark:text-slate-400 text-base sm:text-lg mb-4">No dishes found matching your search.</p>
        <button @click="() => { searchQuery = ''; selectedCategory = 'All'; }" class="px-4 sm:px-6 py-2 sm:py-3 bg-warm-clay-600 text-white rounded-lg hover:bg-warm-clay-700 transition-all active:scale-95 text-sm sm:text-base">
          Clear Filters
        </button>
      </div>
    </main>
  </div>
</template>