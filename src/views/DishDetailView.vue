<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useApi } from '../composables/useApi';

const route = useRoute();
const router = useRouter();
const { singleRecipe, loading, error, fetchRecipeById } = useApi();

onMounted(() => {
  const id = route.params.id as string;
  fetchRecipeById(id);
});
</script>

<template>
  <div class="max-w-5xl mx-auto py-12 px-4">
    <button @click="router.back()" class="mb-8 text-slate-500 hover:text-slate-900 flex items-center gap-2 transition-colors">
      ← Back to Menu
    </button>

    <div v-if="loading" class="animate-pulse flex flex-col md:flex-row gap-8">
       <div class="w-full md:w-1/2 h-96 bg-slate-200 rounded-2xl"></div>
       <div class="w-full md:w-1/2 space-y-4">
          <div class="h-10 bg-slate-200 rounded w-3/4"></div>
          <div class="h-32 bg-slate-200 rounded"></div>
       </div>
    </div>

    <div v-else-if="singleRecipe" class="flex flex-col md:flex-row gap-12">
      <div class="w-full md:w-1/2">
        <img :src="singleRecipe.image" :alt="singleRecipe.name" class="w-full rounded-3xl shadow-2xl object-cover h-[500px]" />
      </div>

      <div class="w-full md:w-1/2">
        <span class="text-orange-600 font-bold uppercase tracking-widest text-sm">{{ singleRecipe.cuisine }}</span>
        <h2 class="text-4xl font-bold text-slate-900 mt-2 mb-6">{{ singleRecipe.name }}</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="font-bold text-slate-900 border-b pb-2 mb-3">Key Ingredients</h3>
            <ul class="grid grid-cols-2 gap-2 text-slate-600">
              <li v-for="ing in singleRecipe.ingredients" :key="ing">• {{ ing }}</li>
            </ul>
          </div>

          <div class="flex gap-8 py-6 border-y border-slate-100">
            <div class="text-center">
              <p class="text-xs uppercase text-slate-400 font-bold">Prep Time</p>
              <p class="text-xl font-bold text-slate-900">{{ singleRecipe.prepTimeMinutes }}m</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase text-slate-400 font-bold">Calories</p>
              <p class="text-xl font-bold text-slate-900">{{ singleRecipe.caloriesPerServing }}</p>
            </div>
            <div class="text-center">
              <p class="text-xs uppercase text-slate-400 font-bold">Rating</p>
              <p class="text-xl font-bold text-slate-900">⭐ {{ singleRecipe.rating }}</p>
            </div>
          </div>

          <button class="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-orange-600 transition-all transform hover:-translate-y-1">
            Order for Dine-in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>