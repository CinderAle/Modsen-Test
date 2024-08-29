import styled from 'styled-components';

import styles from '@/constants/styles';

export const FooterBlock = styled.footer`
    background-color: ${styles.DARK_BLUE};
    width: 100%;
    height: 160px;
    margin-top: auto;

    @media ${(props) => props.theme.media.tablet} {
        height: 100px;
    }
`;
