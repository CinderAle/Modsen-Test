import { RecipeItem } from './recipeItem';

export type RecipeListResponse = {
    recipes: RecipeItem[];
    next: string;
};
