import { createContext, useContext } from 'react';

import { RecipeListResponse } from '@/types/recipeListResponse';

export type SearchContent = {
    recipesList: RecipeListResponse;
    isLoading: boolean;
    setRecipes: (recipes: RecipeListResponse) => void;
    addRecipes: (recipes: RecipeListResponse) => void;
    setLoading: (isLoading: boolean) => void;
};

export const SearchContext = createContext<SearchContent>({
    recipesList: { recipes: [], next: '' },
    isLoading: false,
    setRecipes: () => {},
    addRecipes: () => {},
    setLoading: () => {},
});

export const useSearchContext = () => useContext(SearchContext);
