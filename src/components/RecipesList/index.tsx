import { useNavigate } from 'react-router-dom';

import paths from '@/constants/routes';
import { useSearchContext } from '@/hooks/useSearchContext';
import { getRecipesByLink } from '@/utils/getRecipesByLink';

import Loader from '../Loader';
import {
    ItemImage,
    ItemLabel,
    ListContainer,
    ListItem,
    NextItemsButton,
    NoRecipesLabel,
    ResultsLabel,
    SearchResults,
} from './styles';

const RESULTS_LABEL = 'Founded dishes';
const SHOW_MORE = 'Show more';
const NO_RECIPES = 'No recipes found yet! Use filters above or search recipes';

const RecipesList = () => {
    const { recipesList, addRecipes } = useSearchContext();
    const showRecipe = useNavigate();
    const { isLoading, setLoading } = useSearchContext();

    const showNextRecipes = () => {
        setLoading(true);
        getRecipesByLink(recipesList.next)
            .then((recipes) => addRecipes(recipes))
            .finally(() => {
                setLoading(false);
            });
    };

    const handleRecipeClick = (id: string) => {
        showRecipe(`${paths.RECIPE_PAGE}/${id}`);
    };

    return (
        <SearchResults>
            {recipesList.recipes.length === 0 ? (
                isLoading ? (
                    <Loader />
                ) : (
                    <NoRecipesLabel>{NO_RECIPES}</NoRecipesLabel>
                )
            ) : (
                <ResultsLabel>{RESULTS_LABEL}</ResultsLabel>
            )}
            <ListContainer>
                {recipesList.recipes.map((recipe) => (
                    <ListItem key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                        <ItemImage src={recipe.image} />
                        <ItemLabel>{recipe.label}</ItemLabel>
                    </ListItem>
                ))}
            </ListContainer>
            {recipesList.next &&
                (isLoading ? <Loader /> : <NextItemsButton onClick={showNextRecipes}>{SHOW_MORE}</NextItemsButton>)}
        </SearchResults>
    );
};

export default RecipesList;
