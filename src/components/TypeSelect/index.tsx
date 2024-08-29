import { useState } from 'react';

import { useFilterContext } from '@/hooks/useFilterContext';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';

import { Input, Option, OptionsBlock, TypeSelectBox } from './styles';

type Props = {
    type: typeof DishTypes | typeof DietTypes;
    setFieldValue: (field: string, value: string) => void;
    value: string;
};

const DISH_PLACEHOLDER = 'Select by dish type';
const DIET_PLACEHOLDER = 'Select by diet';
const DISH_NAME = 'dish';
const DIET_NAME = 'diet';

const TypeSelect = ({ type, setFieldValue, value }: Props) => {
    const { setDiet, setDish } = useFilterContext();
    const [dropped, setDropped] = useState(false);

    const placeholder = type === DishTypes ? DISH_PLACEHOLDER : DIET_PLACEHOLDER;
    const name = type === DishTypes ? DISH_NAME : DIET_NAME;

    const selectOption = (value: string) => {
        const enumValue = value as keyof typeof type;
        setFieldValue(name, enumValue === DishTypes.Any || enumValue === DietTypes.Any ? '' : type[enumValue]);
        setDropped(false);

        if (type === DishTypes) {
            setDish(DishTypes[enumValue]);
        } else {
            setDiet(DietTypes[enumValue]);
        }
    };

    const handleInputDropdown = () => {
        setDropped(!dropped);
    };

    return (
        <TypeSelectBox>
            <Input
                name={name}
                type="text"
                readOnly
                placeholder={placeholder}
                value={value}
                onClick={handleInputDropdown}
                dropped={dropped}
            />
            {dropped && (
                <OptionsBlock>
                    {Object.keys(type)
                        .filter((e) => isNaN(Number(e)))
                        .map((e: string, index: number) => (
                            <Option onClick={() => selectOption(e)} key={index} value={e}>
                                {type[e as keyof typeof type]}
                            </Option>
                        ))}
                </OptionsBlock>
            )}
        </TypeSelectBox>
    );
};

export default TypeSelect;
