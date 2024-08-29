import { ENV_VARIABLES } from '@/constants/envVariables';
import { RecipeInfo } from '@/types/recipeInfo';

export const getFullRecipeLink = (recipe: RecipeInfo) => {
    return ENV_VARIABLES.FULL_RECIPE_LINK + recipe.id;
};
