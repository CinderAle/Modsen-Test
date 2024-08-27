import { useState } from 'react';

import { useFilterContext } from '@/hooks/useFilterContext';
import { DietTypes } from '@/types/dietTypes';
import { DishTypes } from '@/types/dishTypes';

import { Input, Option, OptionsBlock, TypeSelectBox } from './styles';

type Props = {
    type: typeof DishTypes | typeof DietTypes;
};

const DISH_PLACEHOLDER = 'Select by dish type';
const DIET_PLACEHOLDER = 'Select by diet';

const TypeSelect = ({ type }: Props) => {
    const { setDiet, setDish } = useFilterContext();
    const [selected, setSelected] = useState<string>('');
    const [dropped, setDropped] = useState(false);

    const placeholder = type === DishTypes ? DISH_PLACEHOLDER : DIET_PLACEHOLDER;

    const selectOption = (value: string) => {
        const enumValue = value as keyof typeof type;
        setSelected(enumValue === DishTypes.Any || enumValue === DietTypes.Any ? '' : type[enumValue]);
        setDropped(false);

        if (type === DishTypes) {
            setDish(DishTypes[enumValue]);
        } else {
            setDiet(DietTypes[enumValue]);
        }
    };

    // for Select
    // const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    //     selectOption(event.target.value);
    // };

    const handleInputDropdown = () => {
        setDropped(!dropped);
    };

    return (
        <TypeSelectBox>
            <Input
                type="text"
                readOnly
                placeholder={placeholder}
                value={selected}
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

    // Might be used as Select
    /*return (
        <Select onChange={handleChange} value={selected}>
            <option value="" selected hidden disabled>
                {placeholder}
            </option>
            {Object.keys(type)
                .filter((e) => isNaN(Number(e)))
                .map((e: string, index: number) => (
                    <option key={index} value={e}>
                        {type[e as keyof typeof type]}
                    </option>
                ))}
        </Select>
    );*/
};

export default TypeSelect;
