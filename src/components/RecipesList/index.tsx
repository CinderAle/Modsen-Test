import { useNavigate } from 'react-router-dom';

import paths from '@/constants/routes';
import { useSearchContext } from '@/hooks/useSearchContext';
import { getRecipesByLink } from '@/utils/getRecipesByLink';

const RecipesList = () => {
    const { recipesList, addRecipes } = useSearchContext();
    const showRecipe = useNavigate();

    const showNextRecipes = () => {
        getRecipesByLink(recipesList.next).then((recipes) => addRecipes(recipes));
    };

    const handleRecipeClick = (id: string) => {
        showRecipe(`${paths.RECIPE_PAGE}/${id}`);
    };

    return (
        <div>
            {recipesList.recipes.map((recipe) => (
                <div key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                    <img src={recipe.image} />
                    <h1>{recipe.label}</h1>
                </div>
            ))}
            {recipesList.next && <button onClick={showNextRecipes}>Next</button>}
        </div>
    );
};

export default RecipesList;
