// src/composables/useApi.ts
import { ref } from 'vue';
import axios from 'axios';
import type { Recipe, RecipeResponse } from '../types/Recipe';

export function useApi() {
  const recipes = ref<Recipe[]>([]);
  const singleRecipe = ref<Recipe | null>(null); // New state for one dish
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchRecipes = async () => {
    loading.value = true;
    try {
      const response = await axios.get<RecipeResponse>('https://dummyjson.com/recipes');
      recipes.value = response.data.recipes;
    } catch (err) {
      error.value = 'Failed to fetch the menu.';
    } finally {
      loading.value = false;
    }
  };

  // New function for Detail View
  const fetchRecipeById = async (id: string | number) => {
    loading.value = true;
    try {
      const response = await axios.get<Recipe>(`https://dummyjson.com/recipes/${id}`);
      singleRecipe.value = response.data;
    } catch (err) {
      error.value = 'Could not find that dish.';
    } finally {
      loading.value = false;
    }
  };

  return { recipes, singleRecipe, loading, error, fetchRecipes, fetchRecipeById };
}