<script setup lang="ts">
import { onMounted } from 'vue';
import { useApi } from '../composables/useApi';

// Initialize your API logic
const { recipes, loading, error, fetchRecipes } = useApi();

// Fetch data as soon as the component is "mounted" on the screen
onMounted(() => {
  fetchRecipes();
});
</script>

<template>
  <div class="bg-slate-50 min-h-screen">
    <header class="bg-slate-900 py-20 px-4 text-center text-white">
      <h2 class="text-4xl md:text-5xl font-bold mb-4">Seaside Dining Redefined</h2>
      <p class="text-lg text-slate-400 max-w-2xl mx-auto">
        Corral & Clay: A fusion of Galle Fort tradition and international excellence.
      </p>
    </header>

    <section class="max-w-7xl mx-auto py-12 px-4">
      
      <div v-if="loading" class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="animate-pulse bg-slate-200 h-80 rounded-2xl"></div>
      </div>

      <div v-else-if="error" class="bg-red-50 text-red-700 p-6 rounded-xl text-center border border-red-200">
        <p class="font-bold">Oops! Something went wrong.</p>
        <p>{{ error }}</p>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="dish in recipes" 
          :key="dish.id" 
          class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow"
        >
          <img :src="dish.image" :alt="dish.name" class="w-full h-48 object-cover" />
          
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h4 class="text-xl font-bold text-slate-900">{{ dish.name }}</h4>
              <span class="text-xs font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2 py-1 rounded">
                {{ dish.cuisine }}
              </span>
            </div>
            
            <p class="text-slate-500 text-sm mb-4 line-clamp-2">
              Main ingredients: {{ dish.ingredients.join(', ') }}
            </p>

            <router-link 
              :to="'/dish/' + dish.id" 
              class="block w-full text-center bg-slate-900 text-white py-3 rounded-xl font-medium hover:bg-orange-600 transition-colors"
            >
              View Dish Details
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>