import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 20px;
`;
Wrapper.displayName = 'Wrapper';

export const H1 = styled.h1`
    display: flex;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;
    color: #fff;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;
H1.displayName = 'h1';

export const P = styled.p`
    color: #fff;
    text-indent: 20px;
`;
P.displayName = 'p';