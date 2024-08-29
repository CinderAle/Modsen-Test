import styled from 'styled-components';

import styles from '@/constants/styles';

export const ErrorContainer = styled.div`
    width: 1280px;
    margin: 100px auto;
    text-align: center;
    font-family: Inter;
    box-sizing: border-box;

    @media ${(props) => props.theme.media.smallLaptop} {
        width: 100%;
        padding: 0 20px;
    }
`;

export const ErrorCode = styled.h1`
    font-size: 122px;
    color: ${styles.ERROR_RED};

    @media ${(props) => props.theme.media.phone} {
        font-size: 40px;
    }
`;

export const ErrorLabel = styled.h2`
    font-size: 46px;
    font-weight: 100;
    margin-top: 25px;

    @media ${(props) => props.theme.media.phone} {
        font-size: 24px;
    }
`;

export const ErrorMessage = styled.p`
    font-size: 21px;
    color: #b0b0b0;
    margin-top: 50px;

    @media ${(props) => props.theme.media.phone} {
        font-size: 21px;
        text-align: left;
    }
`;

export const HomeButton = styled.a`
    font-size: 14px;
    color: ${styles.WHITE};
    text-decoration: none;

    display: block;
    margin: 50px auto;
    align-content: center;
    width: 238px;
    height: 48px;
    background: #008055;
    box-shadow: 0px 8px 16px rgba(0, 128, 85, 0.16);
    border-radius: 24px;
`;
