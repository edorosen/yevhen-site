import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
Wrapper.displayName = 'Wrapper';

export const H1 = styled.p`
    text-transform: uppercase;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border-top: 1px solid black;
`;
H1.displayName = 'H1';