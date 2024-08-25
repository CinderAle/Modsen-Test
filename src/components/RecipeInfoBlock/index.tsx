import { RecipeInfo } from '@/types/recipeInfo';
import { getFullRecipeLink } from '@/utils/getFullRecipeLink';

type Props = {
    recipe: RecipeInfo;
};

const RecipeInfoBlock = ({ recipe }: Props) => {
    const recipeLink = getFullRecipeLink(recipe);
    return (
        <div>
            <img src={recipe.image} />
            <p>Meal type: {recipe.mealType.join(', ')}</p>
            <h1>{recipe.label}</h1>
            <p>Calories: {recipe.calories}</p>
            <p>Cuisine - {recipe.cuisineType.join(', ')}</p>
            <div>
                {recipe.ingredients.map((e) => (
                    <div>{e.text}</div>
                ))}
            </div>

            <div>
                <h2>Products</h2>
                {recipe.ingredients.map((ingredient) => (
                    <img src={ingredient.image} />
                ))}
            </div>

            <a href={recipeLink}>Recipe link</a>
        </div>
    );
};

export default RecipeInfoBlock;
