import styled from 'styled-components';

import styles from '@/constants/styles';

export const SearchLabel = styled.h1`
    font-family: Inter;
    font-size: 76px;
    font-weight: lighter;
    margin: 0;
    margin-top: 150px;
    text-align: center;
    color: ${styles.HEADER_BLUE};

    @media ${(props) => props.theme.media.tablet} {
        margin-top: 75px;
        font-size: 48px;
    }

    @media ${(props) => props.theme.media.phone} {
        display: none;
    }
`;

export const InputContainer = styled.div`
    position: relative;
    width: 1280px;
    margin: 0 auto;

    @media ${(props) => props.theme.media.smallLaptop} {
        width: 90%;
    }
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

    @media ${(props) => props.theme.media.tablet} {
        font-size: 14px;
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

    @media ${(props) => props.theme.media.tablet} {
        top: 7px;
    }
`;

export const FilterContainer = styled.div`
    width: 1280px;
    margin: 35px auto 0;
    display: flex;
    justify-content: space-around;

    @media ${(props) => props.theme.media.smallLaptop} {
        width: 90%;
    }

    @media ${(props) => props.theme.media.tablet} {
        flex-direction: column;
    }
`;
