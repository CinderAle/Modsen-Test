import { useState } from 'react';

import RecipePage from '@/pages/RecipePage';

import { RecipeInfo } from './types/recipeInfo';
import { getRecipeInfo } from './utils/getRecipeInfo';

const uri = import.meta.env.VITE_TEST_LINK;

function App() {
    const [recipe, setRecipe] = useState<RecipeInfo | null>(null);
    getRecipeInfo(uri).then((info) => setRecipe(info));
    if (recipe) {
        return <RecipePage recipe={recipe} />;
    } else {
        return <div></div>;
    }
}

export default App;
