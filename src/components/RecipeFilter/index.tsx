import { ChangeEvent, FormEvent, useState } from 'react';

import TypeSelect from '@/components/TypeSelect';
import { FilterContext } from '@/hooks/useFilterContext';
import { useSearchContext } from '@/hooks/useSearchContext';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';
import getRecipes from '@/utils/getRecipes';

const RecipeFilter = () => {
    const { setRecipes } = useSearchContext();
    const [query, setQuery] = useState('');
    const [diet, setDiet] = useState(DietTypes.Any);
    const [dish, setDish] = useState(DishTypes.Any);

    const changeQuery = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setQuery(value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        getRecipes(query, diet, dish).then((recipesList) => setRecipes(recipesList));
    };

    return (
        <FilterContext.Provider value={{ diet, dish, setDiet, setDish }}>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={changeQuery} />
                <TypeSelect type={DishTypes} />
                <TypeSelect type={DietTypes} />
                <input type="submit" value={'Submit'} />
            </form>
        </FilterContext.Provider>
    );
};

export default RecipeFilter;
