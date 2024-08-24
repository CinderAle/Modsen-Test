import axios from 'axios';

import { Ingredient } from '@/types/ingredient';
import { RecipeInfo } from '@/types/recipeInfo';

type RecipeInfoResponse = {
    recipe: {
        image: string;
        label: string;
        mealType: string[];
        cuisineType: string[];
        calories: number;
        ingredients: Ingredient[];
    };
    _links: {
        self: {
            href: string;
        };
    };
};

export const getRecipeInfo = (recipeUri: string) => {
    const requestUri = `${recipeUri}&field=image&field=label&field=ingredients&field=calories&field=mealType&field=cuisineType`;
    return axios.get(requestUri).then((response) => {
        const infoResponse: RecipeInfoResponse = response.data;
        return new RecipeInfo(
            infoResponse.recipe.label,
            infoResponse.recipe.image,
            infoResponse._links.self.href,
            infoResponse.recipe.mealType,
            infoResponse.recipe.cuisineType,
            infoResponse.recipe.calories,
            infoResponse.recipe.ingredients
        );
    });
};
