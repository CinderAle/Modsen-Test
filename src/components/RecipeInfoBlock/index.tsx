import caloriesIcon from '@/assets/svg/caloriesIcon.svg';
import cuisineIcon from '@/assets/svg/cuisineIcon.svg';
import { RecipeInfo } from '@/types/recipeInfo';
import { getFullRecipeLink } from '@/utils/getFullRecipeLink';
import { makeFirstUppercaseString } from '@/utils/makeFirstLetterUppercase';

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

const MEAL_TYPE = 'Meal type: ';
const CALORIES = 'calories';
const CUISINE = 'Cuisine - ';
const INGREDIENTS = 'Ingredients';
const PRODUCTS = 'Products';
const RECIPE_LINK = 'Recipe link';

const RecipeInfoBlock = ({ recipe }: Props) => {
    const recipeLink = getFullRecipeLink(recipe);
    return (
        <InfoContainer>
            <RecipeBox>
                <MealType>
                    {MEAL_TYPE}
                    {recipe.mealType.join(', ')}
                </MealType>
                <RecipeName>{recipe.label}</RecipeName>
                <GeneralInfo>
                    <GeneralInfoIcon src={caloriesIcon} />
                    {Math.round(recipe.calories)} {CALORIES}
                </GeneralInfo>
                <GeneralInfo>
                    <GeneralInfoIcon src={cuisineIcon} />
                    {CUISINE}
                    {makeFirstUppercaseString(recipe.cuisineType)}
                </GeneralInfo>
                <IngredientsList>
                    <IngredientsLabel>{INGREDIENTS}</IngredientsLabel>
                    {recipe.ingredients.map((e) => (
                        <IngredientItem>{e.text}</IngredientItem>
                    ))}
                </IngredientsList>

                <ProductsLabel>{PRODUCTS}</ProductsLabel>
                <ProductsBlock>
                    {recipe.ingredients.map((ingredient) => (
                        <ProductImage src={ingredient.image} />
                    ))}
                </ProductsBlock>
                <RecipeLink href={recipeLink}>{RECIPE_LINK}</RecipeLink>
            </RecipeBox>
            <ResultImage src={recipe.image} />
        </InfoContainer>
    );
};

export default RecipeInfoBlock;
