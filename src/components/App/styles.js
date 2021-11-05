import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto Mono', monospace;
  }
`;

export const Wrapper = styled.div`
  background-color: #181818;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;