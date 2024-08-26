import styled from 'styled-components';

import styles from '@/constants/styles';

export const SearchLabel = styled.h1`
    font-family: Inter;
    font-size: 76px;
    font-weight: lighter;
    margin: 0;
    margin-top: 150px;
    text-align: center;
    color: #2e266f;
`;

export const InputContainer = styled.div`
    position: relative;
    width: 1280px;
    margin: 0 auto;
`;

export const SearchInput = styled.input`
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid ${styles.GOLDEN};
    border-radius: 48px;
    padding: 12px 48px 12px 16px;
    margin-top: 65px;
    font-size: 24px;
    font-family: Inter;
    outline: none;
    color: ${styles.GOLDEN};

    &::placeholder {
        color: rgba(0, 0, 0, 0.22);
    }
`;

export const SubmitButton = styled.button`
    outline: none;
    background: transparent;
    border: none;

    position: absolute;
    top: 12px;
    right: 16px;

    cursor: pointer;
`;

export const FilterContainer = styled.div`
    width: 1280px;
    margin: 35px auto 0;
    display: flex;
    justify-content: space-around;
`;
