import { ChangeEvent, FormEvent, useState } from 'react';

import SearchIcon from '@/assets/svg/searchIcon.svg';
import TypeSelect from '@/components/TypeSelect';
import { FilterContext } from '@/hooks/useFilterContext';
import { useSearchContext } from '@/hooks/useSearchContext';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';
import getRecipes from '@/utils/getRecipes';

import { FilterContainer, InputContainer, SearchInput, SearchLabel, SubmitButton } from './styles';

const SEARCH_LABEL = 'Discover Recipe & Delicious Food';
const SEARCH_PLACEHOLDER = 'Search Your Favorite Food';

const RecipeFilter = () => {
    const { setRecipes, setLoading } = useSearchContext();
    const [query, setQuery] = useState('');
    const [diet, setDiet] = useState(DietTypes.Any);
    const [dish, setDish] = useState(DishTypes.Any);

    const changeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setQuery(value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        getRecipes(query, diet, dish)
            .then((recipesList) => setRecipes(recipesList))
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <FilterContext.Provider value={{ diet, dish, setDiet, setDish }}>
            <form onSubmit={handleSubmit}>
                <SearchLabel>{SEARCH_LABEL}</SearchLabel>
                <InputContainer>
                    <SearchInput type="text" value={query} onChange={changeQuery} placeholder={SEARCH_PLACEHOLDER} />
                    <SubmitButton type="submit">
                        <img src={SearchIcon} />
                    </SubmitButton>
                </InputContainer>
                <FilterContainer>
                    <TypeSelect type={DishTypes} />
                    <TypeSelect type={DietTypes} />
                </FilterContainer>
            </form>
        </FilterContext.Provider>
    );
};

export default RecipeFilter;
