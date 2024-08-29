import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import RecipeInfoBlock from '@/components/RecipeInfoBlock';
import { useLocationContext } from '@/hooks/useLocationContext';
import { RecipeInfo } from '@/types/recipeInfo';
import { getRecipeById } from '@/utils/getRecipeById';

const RecipePage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<RecipeInfo | null>(null);
    const showError = useNavigate();
    const { setPath } = useLocationContext();

    useEffect(() => {
        if (id) {
            getRecipeById(id)
                .then((response) => {
                    setRecipe(response);
                    setPath(window.location.pathname);
                })
                .catch(() => {
                    showError('/error');
                });
        }
    }, [id]);

    return recipe ? <RecipeInfoBlock recipe={recipe} /> : <div>Loading</div>;
};

export default RecipePage;
