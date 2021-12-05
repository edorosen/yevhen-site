import styled from 'styled-components';

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        align-items: center;
    }
`;
Content.displayName = 'Content';

export const CardChar = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a{
        text-decoration: none;
        text-transform: uppercase;
        color: #fff;
    }
`;
CardChar.displayName = 'CardChar';

export const PortfolioCard = styled.div`
    position: relative;
    margin: 10px;
    img {
        width: 100%;
        border-radius: 6px;
    }
`;
PortfolioCard.displayName = 'PortfolioCard';

export const CardOverlay = styled.div`
    background: rgba(0,0,0,0.7);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 3px;
    left: 0;
    border-radius: 6px;
    opacity: 0;
    overflow: hidden;
    transition: all 0.2s ease-in-out;

    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;

        li{
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ff014f;
            padding: 10px 18px;
            border-radius: 6px;

            a{
                text-decoration: none;
                color: #fff;
                font-family: 'Roboto', sans-serif;
            }
        }
    }

    &:hover {
        opacity: 1;
        overflow: hidden;
    }
`;
CardOverlay.displayName = 'CardOverlay';