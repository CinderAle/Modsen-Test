import { Formik } from 'formik';
import { useState } from 'react';

import SearchIcon from '@/assets/svg/searchIcon.svg';
import TypeSelect from '@/components/TypeSelect';
import { FilterContext } from '@/hooks/useFilterContext';
import { useSearchContext } from '@/hooks/useSearchContext';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';
import getRecipes from '@/utils/getRecipes';

import { FilterContainer, InputContainer, SearchInput, SearchLabel, SubmitButton, ValidationError } from './styles';
import { validationSchema } from './validation';

const SEARCH_LABEL = 'Discover Recipe & Delicious Food';
const SEARCH_PLACEHOLDER = 'Search Your Favorite Food';

const RecipeFilter = () => {
    const { setRecipes, setLoading } = useSearchContext();
    const [diet, setDiet] = useState(DietTypes.Any);
    const [dish, setDish] = useState(DishTypes.Any);

    const handleSubmit = (values: { query: string }) => {
        setLoading(true);
        getRecipes(values.query, diet, dish)
            .then((recipesList) => setRecipes(recipesList))
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <FilterContext.Provider value={{ diet, dish, setDiet, setDish }}>
            <Formik
                initialValues={{
                    dish: '',
                    diet: '',
                    query: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, values, handleChange, setFieldValue, errors }) => (
                    <form onSubmit={handleSubmit}>
                        <SearchLabel>{SEARCH_LABEL}</SearchLabel>
                        <InputContainer>
                            <SearchInput
                                name="query"
                                type="text"
                                value={values.query}
                                onChange={handleChange}
                                placeholder={SEARCH_PLACEHOLDER}
                            />
                            <SubmitButton type="submit">
                                <img src={SearchIcon} />
                            </SubmitButton>
                            <ValidationError>{errors.query}</ValidationError>
                        </InputContainer>
                        <FilterContainer>
                            <TypeSelect setFieldValue={setFieldValue} value={values.dish} type={DishTypes} />
                            <TypeSelect setFieldValue={setFieldValue} value={values.diet} type={DietTypes} />
                        </FilterContainer>
                    </form>
                )}
            </Formik>
        </FilterContext.Provider>
    );
};

export default RecipeFilter;
