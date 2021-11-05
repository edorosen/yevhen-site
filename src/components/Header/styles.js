import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 5;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    background-color: #212428de;
    box-shadow: 0 0 10px 5px rgb(0 0 0 / 50%);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
Wrapper.displayName = 'Wrapper';

export const TopImg = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;
    justify-content: flex-start;
`;
TopImg.displayName = 'TopImg';

export const HeadImg = styled.img`
    max-width: 10%;
    border-radius: 50px;
    border: 2px solid gray;
`;
HeadImg.displayName = 'HeadImg';

export const TopP = styled.p`
    color: #666;
    text-transform: uppercase;
    margin-left: 5px;
`;
TopP.displayName = 'TopP';

export const ModalButton = styled.button`
    width: 150px;
    border-radius: 5px;
    border: none;
    background-color: rgba(18, 18, 18, 0.8);
    color: #ff014f;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    transition: all 0.5s;
    box-shadow: 0 0 10px rgb(255 255 255 / 50%)
`;
ModalButton.displayName = 'ModalButton';

export const LangDiv = styled.div`
    margin: 5px;    
}
`;
LangDiv.displayName = 'LangDiv';

export const LangLink = styled.a`
    text-decoration: none;
    color: gray;
    &:nth-child(2n) {
        border-left: 1px solid #666;
        padding: 2px;
    }
`;
LangLink.displayName = 'LangLink';