import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html,
body {

    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    text-decoration: none;
    background-color: ${(props) => props.theme.colors.text};
    scroll-behavior: smooth;
}

* {
    box-sizing: border-box;
}

`

export default GlobalStyles;