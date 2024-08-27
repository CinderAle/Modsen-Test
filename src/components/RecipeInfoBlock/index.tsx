import caloriesIcon from '@/assets/svg/caloriesIcon.svg';
import cuisineIcon from '@/assets/svg/cuisineIcon.svg';
import { RecipeInfo } from '@/types/recipeInfo';
import { getFullRecipeLink } from '@/utils/getFullRecipeLink';

import {
    GeneralInfo,
    GeneralInfoIcon,
    InfoContainer,
    IngredientItem,
    IngredientsLabel,
    IngredientsList,
    MealType,
    ProductImage,
    ProductsBlock,
    ProductsLabel,
    RecipeBox,
    RecipeLink,
    RecipeName,
    ResultImage,
} from './styles';

type Props = {
    recipe: RecipeInfo;
};

const RecipeInfoBlock = ({ recipe }: Props) => {
    const recipeLink = getFullRecipeLink(recipe);
    return (
        <InfoContainer>
            <RecipeBox>
                <MealType>Meal type: {recipe.mealType.join(', ')}</MealType>
                <RecipeName>{recipe.label}</RecipeName>
                <GeneralInfo>
                    <GeneralInfoIcon src={caloriesIcon} />
                    {Math.round(recipe.calories)} calories
                </GeneralInfo>
                <GeneralInfo>
                    <GeneralInfoIcon src={cuisineIcon} />
                    Cuisine - {recipe.cuisineType.join(', ')}
                </GeneralInfo>
                <IngredientsList>
                    <IngredientsLabel>Ingredients</IngredientsLabel>
                    {recipe.ingredients.map((e) => (
                        <IngredientItem>{e.text}</IngredientItem>
                    ))}
                </IngredientsList>

                <ProductsLabel>Products</ProductsLabel>
                <ProductsBlock>
                    {recipe.ingredients.map((ingredient) => (
                        <ProductImage src={ingredient.image} />
                    ))}
                </ProductsBlock>
                <RecipeLink href={recipeLink}>Recipe link</RecipeLink>
            </RecipeBox>
            <ResultImage src={recipe.image} />
        </InfoContainer>
    );
};

export default RecipeInfoBlock;
