import axios from 'axios';

import { RecipeItem } from '@/types/recipeItem';
import { RecipeItemResponse } from '@/types/recipeItemResponse';

export const getRecipesByLink = (link: string) => {
    return axios.get(link).then((response) => {
        return {
            recipes: response.data.hits.map(
                (recipe: RecipeItemResponse) =>
                    new RecipeItem(recipe.recipe.label, recipe.recipe.image, recipe._links.self.href)
            ),
            next: response.data._links.next?.href ?? '',
        };
    });
};
