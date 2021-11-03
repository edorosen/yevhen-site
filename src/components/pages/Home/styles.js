import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;
Content.displayName = 'Content';

export const CardChar = styled.div`
    display: flex;
    width: 30%;
    justify-content: center;
`;
CardChar.displayName = 'CardChar';

export const PortfolioCard = styled.div`
    position: relative;

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

    @media (max-width: 768px) {
        opacity: 1;

        ul {
    
            li{
                padding: 10px;
    
                a{
                    font-size: 10px;
                }
            }
        }
    }
`;
CardOverlay.displayName = 'CardOverlay';