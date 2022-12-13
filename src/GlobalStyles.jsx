import { createGlobalStyle } from 'styled-components';
 
const GlobalStyles = createGlobalStyle`
  body {
        padding: 1.5rem 1rem;
        font-family: 'Poppins', sans-serif;
        webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`;
 
export default GlobalStyles;