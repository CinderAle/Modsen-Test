import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import RecipeInfoBlock from '@/components/RecipeInfoBlock';
import { RecipeInfo } from '@/types/recipeInfo';
import { getRecipeById } from '@/utils/getRecipeById';

const RecipePage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<RecipeInfo | null>(null);

    useEffect(() => {
        if (id) {
            getRecipeById(id).then((response) => {
                setRecipe(response);
            });
        }
    }, []);

    return recipe ? <RecipeInfoBlock recipe={recipe} /> : <div>Loading</div>;
};

export default RecipePage;
