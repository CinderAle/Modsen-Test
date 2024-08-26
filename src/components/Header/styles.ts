import styled from 'styled-components';

import styles from '@/constants/styles';

export const HeaderBlock = styled.header`
    width: 100%;
    background-color: ${styles.DARK_BLUE};
    box-shadow: 0px 4px 16.1px rgba(0, 0, 0, 0.1);
    height: 150px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const RecipeLogo = styled.img`
    width: 48px;
    margin-right: 15px;
`;

export const RecipeHost = styled.h1`
    color: ${styles.WHITE};
    font-size: 24px;

    display: flex;
    align-items: center;
`;

export const HeaderNav = styled.nav`
    background-color: ${styles.DARK_BLUE};
`;

export const PageLink = styled.a`
    color: ${styles.WHITE};
    text-decoration: none;
    font-size: 24px;
`;
