// src/composables/useApi.ts
import { ref } from 'vue';
import axios from 'axios';
import type { Recipe, RecipeResponse } from '../types/Recipe';

export function useApi() {
  const recipes = ref<Recipe[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchRecipes = async () => {
    loading.value = true;
    try {
      // Fetching from DummyJSON as required [cite: 6]
      const response = await axios.get<RecipeResponse>('https://dummyjson.com/recipes');
      recipes.value = response.data.recipes;
    } catch (err) {
      error.value = 'Failed to fetch the menu. Please try again later.';
    } finally {
      loading.value = false;
    }
  };

  return { recipes, loading, error, fetchRecipes };
}