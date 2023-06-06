import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: #177785;
        font-family: 'IBM Plex Sans', monospace;
        //max-width: 1400px;
    }; 
`;    