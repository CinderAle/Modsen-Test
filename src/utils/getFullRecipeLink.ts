import { RecipeInfo } from '@/types/recipeInfo';

const FULL_RECIPE_LINK = import.meta.env.VITE_FULL_RECIPE_LINK;

export const getFullRecipeLink = (recipe: RecipeInfo) => {
    return FULL_RECIPE_LINK + recipe.id;
};
