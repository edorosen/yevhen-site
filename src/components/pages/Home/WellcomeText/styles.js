import styled from 'styled-components';


export const WellcomeDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
    background-color: #202020;
    p{
        font-weight: 700;
        text-align: center;
        font-size: 40px;
        font-family: Hack, sans-serif;
        text-transform: uppercase;
        background: linear-gradient(90deg, #000, #fff, #000);
        letter-spacing: 5px;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        background-repeat: no-repeat;
        background-size: 80%;
        animation: shine 5s linear infinite;
        position: relative;

        a{
            text-decoration: none;
            color: inherit;
            font-size: 24px;
        }
    }
    @keyframes shine {
        0% {
          background-position-x: -500%;
        }
        100% {
          background-position-x: 500%;
        }
      }
`;
WellcomeDiv.displayName = 'WellcomeDiv';