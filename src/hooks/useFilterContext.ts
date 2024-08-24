import { createContext, useContext } from 'react';

import { DietTypes } from '../types/dietTypes';
import { DishTypes } from '../types/dishTypes';

export type FilterContent = {
    diet: DietTypes;
    dish: DishTypes;
    setDiet: (diet: DietTypes) => void;
    setDish: (dish: DishTypes) => void;
};

export const FilterContext = createContext<FilterContent>({
    diet: DietTypes.Any,
    dish: DishTypes.Any,
    setDiet: () => {},
    setDish: () => {},
});

export const useFilterContext = () => useContext(FilterContext);
