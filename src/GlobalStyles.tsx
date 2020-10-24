import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;900&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap');

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0rem;
        margin: 0rem;
    }

    body {
        margin: 0;
        font-size: 18px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Source Sans Pro';
        font-weight: 900;
    }

    p, small {
        font-family: 'Source Sans Pro';
        font-weight: 400;
    }

    pre {
        overflow-x: scroll;
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */  
        position: relative;
        margin-bottom: 1rem;
    }

    /* Hide scrollbar for Chrome, Safari and Opera */
    pre::-webkit-scrollbar {
        display: none;
    }

    html,
    body,
    blockquote,
    code,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    button,
    fieldset,
    form,
    input,
    legend,
    textarea,
    select {
        margin: 0;
        padding: 0;
    }
    a,
    a * {
        cursor: pointer;
    }
    ul,
    li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    strong {
        font-weight: bold;
    }
    em {
        font-style: italic;
    }
`
