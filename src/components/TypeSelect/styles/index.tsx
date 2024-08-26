import styled from 'styled-components';

import selectCaret from '@/assets/svg/selectCaret.svg';
import styles from '@/constants/styles';

const FieldStyle = `
    outline: none;
    border-radius: 28px;
    border: none;
    border-bottom: 1px solid ${styles.GOLDEN};
    font-family: Roboto;
    padding: 8px;
    box-sizing: border-box;
    font-size: 16px;
    color: #737373;
`;

export const TypeSelectBox = styled.div`
    width: 322px;
`;

// for select in TypeSelect
// export const Select = styled.select`
//     ${FieldStyle}
//     width: 322px;
// `;

const InputBox = styled.div`
    width: 100%;
    position: relative;
`;

const InputField = styled.input`
    ${FieldStyle}
    cursor: pointer;
    width: 100%;
`;

const Caret = styled.img<{ dropped: boolean }>`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    transform: rotate(${(props) => (props.dropped ? '0' : '180deg')});
    transition: 0.3s;
`;

export const Input = ({
    type,
    readOnly,
    placeholder,
    value,
    onClick,
    dropped,
}: {
    type: string;
    readOnly: boolean;
    placeholder: string;
    value: string;
    onClick: () => void;
    dropped: boolean;
}) => {
    return (
        <InputBox onClick={onClick}>
            <InputField type={type} readOnly={readOnly} placeholder={placeholder} value={value} />
            <Caret src={selectCaret} dropped={dropped} />
        </InputBox>
    );
};

export const OptionsBlock = styled.ul`
    box-sizing: border-box;

    margin-top: 20px;
    list-style: none;
    overflow-y: scroll;
    width: 100%;
    height: 188px;
    border: 1px solid ${styles.GOLDEN};
    border-radius: 20px;

    -ms-overflow-style: none;
    scrollbar-width: none;
    &:-webkit-scrollbar {
        display: none;
    }
`;

export const Option = styled.li`
    padding: 14px;
    cursor: pointer;
    font-family: Roboto;

    &:hover {
        background-color: #d1d1d1;
    }
`;
