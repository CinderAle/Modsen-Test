import { ChangeEvent, useState } from 'react';

import { useFilterContext } from '@/hooks/useFilterContext';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';

type Props = {
    type: typeof DishTypes | typeof DietTypes;
};

const TypeSelect = ({ type }: Props) => {
    const { diet, dish, setDiet, setDish } = useFilterContext();
    const [selected, setSelected] = useState((type === DishTypes ? dish : diet).toString());

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        const enumValue = value as keyof typeof type;
        setSelected(value.toString());

        if (type === DishTypes) {
            setDish(DishTypes[enumValue]);
        } else {
            setDiet(DietTypes[enumValue]);
        }
    };

    return (
        <select onChange={handleChange} value={selected}>
            {Object.keys(type)
                .filter((e) => isNaN(Number(e)))
                .map((e: string, index: number) => (
                    <option key={index} value={e}>
                        {type[e as keyof typeof type]}
                    </option>
                ))}
        </select>
    );
};

export default TypeSelect;
