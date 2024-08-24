import { createContext, useContext } from 'react';

import { RecipeListResponse } from '@/types/recipeListResponse';

export type SearchContent = {
    recipesList: RecipeListResponse;
    setRecipes: (recipes: RecipeListResponse) => void;
    addRecipes: (recipes: RecipeListResponse) => void;
};

export const SearchContext = createContext<SearchContent>({
    recipesList: { recipes: [], next: '' },
    setRecipes: () => {},
    addRecipes: () => {},
});

export const useSearchContext = () => useContext(SearchContext);
