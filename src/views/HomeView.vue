<script setup lang="ts">
import { onMounted } from 'vue';
import { useApi } from '../composables/useApi';

// Destructure our logic from the custom Composable 
const { 
  filteredRecipes, 
  searchQuery, 
  selectedCategory, 
  loading, 
  error, 
  fetchRecipes 
} = useApi();

// Fetch data on initial load [cite: 9]
onMounted(() => {
  fetchRecipes();
});

// Unique cuisines for the filter dropdown
const cuisines = ['All', 'Italian', 'Asian', 'Mexican', 'Indian', 'Pakistani', 'Japanese'];
</script>

<template>
  <div class="min-h-screen pb-20">
    <header class="relative h-[40vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      <div class="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=2000')] bg-cover bg-center"></div>
      <div class="relative text-center px-4">
        <h2 class="text-5xl font-bold mb-4 tracking-tight">Our Menu</h2>
        <p class="text-xl text-slate-300 font-light">Coastal flavors meeting international culinary arts.</p>
      </div>
    </header>

    <section class="max-w-7xl mx-auto px-4 mt-12">
      <div class="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
        <div class="w-full md:w-1/2 relative">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search for a dish..." 
            class="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 outline-none transition-all dark:bg-slate-900 dark:border-slate-600 dark:text-white"
          />
          <span class="absolute left-4 top-3.5 opacity-40">🔍</span>
        </div>

        <div class="w-full md:w-auto flex items-center gap-3">
          <label class="text-sm font-bold text-slate-400 uppercase tracking-wider">Cuisine:</label>
          <select 
            v-model="selectedCategory"
            class="px-5 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-orange-500 outline-none dark:bg-slate-900 dark:border-slate-600 dark:text-white"
          >
            <option v-for="cat in cuisines" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
      </div>

      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div v-for="i in 6" :key="i" class="animate-pulse bg-slate-200 dark:bg-slate-700 h-96 rounded-3xl"></div>
      </div>

      <div v-else-if="error" class="text-center py-20">
        <p class="text-red-500 font-medium">{{ error }}</p>
      </div>

      <div v-else-if="filteredRecipes.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div 
          v-for="dish in filteredRecipes" 
          :key="dish.id"
          class="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-700"
        >
          <div class="h-64 overflow-hidden relative">
            <img 
              :src="dish.image" 
              :alt="dish.name" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
            />
            <div class="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-black text-orange-600 uppercase">
              {{ dish.cuisine }}
            </div>
          </div>

          <div class="p-8">
            <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">{{ dish.name }}</h4>
            <div class="flex items-center gap-4 text-sm text-slate-500 mb-6 font-medium">
              <span>⭐ {{ dish.rating }}</span>
              <span>•</span>
              <span>{{ dish.caloriesPerServing }} Calories</span>
            </div>
            
            <router-link 
              :to="{ name: 'dish-detail', params: { id: dish.id } }"
              class="block w-full text-center py-4 bg-slate-900 dark:bg-orange-600 text-white rounded-2xl font-bold hover:bg-orange-600 dark:hover:bg-orange-700 transition-all active:scale-95"
            >
              View Full Experience
            </router-link>
          </div>
        </div>
      </div>

      <div v-else class="text-center py-20 opacity-50">
        <p class="text-2xl">No dishes match your search.</p>
      </div>
    </section>
  </div>
</template>