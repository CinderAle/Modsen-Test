import { ENV_VARIABLES } from '@/constants/envVariables';

import { getRecipeInfo } from './getRecipeInfo';

export const getRecipeById = (recipeId: string) => {
    const recipeUri = `${ENV_VARIABLES.API_URI}/${recipeId}?type=public&app_id=${ENV_VARIABLES.APP_ID}&app_key=${ENV_VARIABLES.APP_KEY}`;
    return getRecipeInfo(recipeUri);
};
