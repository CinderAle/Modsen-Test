import { useState } from 'react';

import RecipeFilter from '@/components/RecipeFilter';
import RecipesList from '@/components/RecipesList';
import { SearchContext } from '@/hooks/useSearchContext';
import { RecipeListResponse } from '@/types/recipeListResponse';

const HomePage = () => {
    const [recipesList, setRecipes] = useState<RecipeListResponse>({ recipes: [], next: '' });
    const [isLoading, setLoading] = useState(false);

    const addRecipes = (newRecipes: RecipeListResponse) => {
        setRecipes({ recipes: [...recipesList.recipes, ...newRecipes.recipes], next: newRecipes.next });
    };

    return (
        <SearchContext.Provider value={{ recipesList, isLoading, setRecipes, addRecipes, setLoading }}>
            <RecipeFilter />
            <RecipesList />
        </SearchContext.Provider>
    );
};

export default HomePage;
