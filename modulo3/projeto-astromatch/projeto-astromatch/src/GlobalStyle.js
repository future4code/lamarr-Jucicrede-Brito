import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --soft-white: #f2f2f2;
        --green: #8bcf21;
        --yellou: #ffcb16;
        --dark: #383b40;
        --deep-blue: #011640;
        --deep-blue-secondary: #010f2b;
    }

    h1{
        font-family: 'Oswald', cursive;
        color: var(--yellou);
    }
    body{
       font-family:'Rejdhani', sans-serif;
       background: var(--soft-white);
    }

    *{
        margin: 0;
        padding: 0;
        border: border-box;
    }

`