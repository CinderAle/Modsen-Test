import styled from 'styled-components';

import styles from '@/constants/styles';

export const InfoContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 1280px;
    align-items: center;
    margin: 200px 0;
`;

export const RecipeBox = styled.div`
    width: 760px;
    background-color: ${styles.DARK_BLUE};
    border-radius: 28px;
    box-sizing: border-box;
    padding: 60px;
`;

export const ResultImage = styled.img`
    width: 520px;
    border-radius: 0 28px 28px 0;
`;

export const MealType = styled.h4`
    font-size: 13px;
    font-family: Poppins;
    color: ${styles.GOLDEN};
    letter-spacing: 0.17em;
`;

export const RecipeName = styled.h2`
    font-family: Playfair_Display;
    font-size: 40px;
    color: ${styles.WHITE};
    font-weight: normal;
    margin-bottom: 50px;
`;

export const GeneralInfo = styled.p`
    display: inline-block;
    color: ${styles.WHITE};
    font-size: 16px;
    font-family: Poppins;
    margin-right: 60px;
    position: relative;
    line-height: 1;
    padding-left: 20px;
`;

export const GeneralInfoIcon = styled.img`
    position: absolute;
    margin-left: -20px;
    height: 100%;
`;

export const IngredientsList = styled.ul`
    margin-top: 40px;
    background: linear-gradient(90deg, rgba(217, 217, 217, 0) 23.93%, rgba(217, 217, 217, 0.1) 100%);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px 0;
    list-style: none;
`;

export const IngredientsLabel = styled.h3`
    color: ${styles.WHITE};
    font-family: Playfair_Display;
    font-size: 24px;
`;

export const IngredientItem = styled.li`
    font-family: Poppins;
    font-size: 16px;
    color: #a2a8ba;
    margin: 10px 0;
    position: relative;
    padding-left: 40px;

    &:before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid #a2a8ba;
        margin-left: -40px;
    }
`;

export const ProductsLabel = styled.h3`
    font-family: Playfair_Display;
    font-size: 24px;
    color: ${styles.WHITE};
    margin: 30px 0;
`;

export const ProductsBlock = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ProductImage = styled.img`
    width: 163px;
    height: 163px;
    border-radius: 20px;
    margin-bottom: 20px;
`;

export const RecipeLink = styled.a`
    display: block;
    margin: 70px 0 20px;
    font-family: Playfair_Display;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: ${styles.WHITE};
`;
