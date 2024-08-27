import { useNavigate } from 'react-router-dom';

import paths from '@/constants/routes';
import { useSearchContext } from '@/hooks/useSearchContext';
import { getRecipesByLink } from '@/utils/getRecipesByLink';

import { ItemImage, ItemLabel, ListContainer, ListItem, NextItemsButton, ResultsLabel, SearchResults } from './styles';

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
        <SearchResults>
            <ResultsLabel>Founded dishes</ResultsLabel>
            <ListContainer>
                {recipesList.recipes.map((recipe) => (
                    <ListItem key={recipe.id} onClick={() => handleRecipeClick(recipe.id)}>
                        <ItemImage src={recipe.image} />
                        <ItemLabel>{recipe.label}</ItemLabel>
                    </ListItem>
                ))}
            </ListContainer>
            {recipesList.next && <NextItemsButton onClick={showNextRecipes}>Show more</NextItemsButton>}
        </SearchResults>
    );
};

export default RecipesList;
