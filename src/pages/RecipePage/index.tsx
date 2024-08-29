import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import RecipeInfoBlock from '@/components/RecipeInfoBlock';
import { RecipeInfo } from '@/types/recipeInfo';
import { getRecipeById } from '@/utils/getRecipeById';

import { PageLoader } from './styles';

const RecipePage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<RecipeInfo | null>(null);
    const showError = useNavigate();

    useEffect(() => {
        if (id) {
            getRecipeById(id)
                .then((response) => {
                    setRecipe(response);
                })
                .catch(() => {
                    showError('/error');
                });
        }
    }, [id]);

    return recipe ? <RecipeInfoBlock recipe={recipe} /> : <PageLoader />;
};

export default RecipePage;
