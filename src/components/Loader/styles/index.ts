import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
    100%{transform: rotate(1turn)}
`;

export const Spinner = styled.div`
    width: 50px;
    margin: 0 auto;

    aspect-ratio: 1;
    border-radius: 50%;
    background:
        radial-gradient(farthest-side, #ffa516 94%, #0000) top/8px 8px no-repeat,
        conic-gradient(#0000 30%, #ffa516);
    -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
    animation: ${rotateAnimation} 1s infinite linear;
`;
