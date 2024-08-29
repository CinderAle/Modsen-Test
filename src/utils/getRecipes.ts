import { ENV_VARIABLES } from '@/constants/envVariables';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';

import { getRecipesByLink } from './getRecipesByLink';

export default (query: string, diet: DietTypes, dishType: DishTypes) => {
    let requestUri = `${ENV_VARIABLES.API_URI}?type=public&app_id=${ENV_VARIABLES.APP_ID}&app_key=${ENV_VARIABLES.APP_KEY}`;
    requestUri += query ? '&q=' + encodeURI(query) : '';
    requestUri += diet !== DietTypes.Any ? '&diet=' + encodeURI(diet).toLowerCase() : '';
    requestUri += dishType !== DishTypes.Any ? '&dishType=' + encodeURI(dishType) : '';
    requestUri += `&field=image&field=label&field=externalId`;

    console.log(requestUri);

    return getRecipesByLink(requestUri);
};
