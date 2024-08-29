import styled from 'styled-components';

import Loader from '@/components/Loader';

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const TemporalLoader = styled(Loader)<{ isLoaded: boolean }>`
    display: ${(props) => (props.isLoaded ? 'none' : 'block')};
`;

export const Image = styled.img<{ isLoaded: boolean }>`
    width: 100%;
    height: 100%;
    display: ${(props) => (props.isLoaded ? 'block' : 'none')};
`;
