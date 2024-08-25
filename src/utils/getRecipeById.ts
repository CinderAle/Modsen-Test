import { getRecipeInfo } from './getRecipeInfo';

const API_URI = import.meta.env.VITE_API_URI;
const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

export const getRecipeById = (recipeId: string) => {
    const recipeUri = `${API_URI}/${recipeId}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;
    return getRecipeInfo(recipeUri);
};
