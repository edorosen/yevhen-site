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
    border-top: 1px solid #fff;
    color: #666;
`;
H1.displayName = 'H1';

export const CookiesDiv = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
    }

    p{
        margin: 10px;
    }
`;
CookiesDiv.displayName = 'CookiesDiv';