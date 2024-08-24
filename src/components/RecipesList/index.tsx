import { useSearchContext } from '../../hooks/useSearchContext';
import { getRecipesByLink } from '../../utils/getRecipesByLink';

const RecipesList = () => {
    const { recipesList, addRecipes } = useSearchContext();

    const showNextRecipes = () => {
        getRecipesByLink(recipesList.next).then((recipes) => addRecipes(recipes));
    };

    return (
        <div>
            {recipesList.recipes.map((recipe) => (
                <div key={recipe.id}>
                    <img src={recipe.image} />
                    <h1>{recipe.label}</h1>
                </div>
            ))}
            {recipesList.next && <button onClick={showNextRecipes}>Next</button>}
        </div>
    );
};

export default RecipesList;
