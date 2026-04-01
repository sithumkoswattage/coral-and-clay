import { ref, computed } from 'vue'; // Import computed
import axios from 'axios';
import type { Recipe, RecipeResponse } from '../types/Recipe';

export function useApi() {
  const recipes = ref<Recipe[]>([]);
  const singleRecipe = ref<Recipe | null>(null);
  const loading = ref(false);
  const error = ref<string | null>(null);
  
  // Search and Filter states
  const searchQuery = ref('');
  const selectedCategory = ref('All');

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

  // Logic to filter recipes based on search text and category 
  const filteredRecipes = computed(() => {
    return recipes.value.filter(recipe => {
      const matchesSearch = recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase());
      const matchesCategory = selectedCategory.value === 'All' || recipe.cuisine === selectedCategory.value;
      return matchesSearch && matchesCategory;
    });
  });

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

  return { 
    recipes, 
    filteredRecipes, 
    searchQuery, 
    selectedCategory, 
    singleRecipe, 
    loading, 
    error, 
    fetchRecipes, 
    fetchRecipeById 
  };
}