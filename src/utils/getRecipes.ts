import { DietTypes } from '../types/dietTypes';
import { DishTypes } from '../types/dishTypes';
import { getRecipesByLink } from './getRecipesByLink';

const API_URI = import.meta.env.VITE_API_URI;
const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

export default (query: string, diet: DietTypes, dishType: DishTypes) => {
    let requestUri = `${API_URI}?type=public&app_id=${APP_ID}&app_key=${APP_KEY}`;
    requestUri += query ? '&q=' + encodeURI(query) : '';
    requestUri += diet !== DietTypes.Any ? '&diet=' + encodeURI(diet).toLowerCase() : '';
    requestUri += dishType !== DishTypes.Any ? '&dishType=' + encodeURI(dishType) : '';
    requestUri += `&field=image&field=label&field=externalId`;

    return getRecipesByLink(requestUri);
};
