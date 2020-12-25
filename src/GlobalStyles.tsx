import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    body[data-theme='light'] {
        /* Colours */
        --primary: #ffffff;
        --secondary: #fdfaf6;
        --code: #663399;
        --text: #202020;
        --text-gradient: linear-gradient(red, #663399);
        --background-color: hsla(0, 0%, 100%, 0.2);

        /* Spacing */
        --space: 1rem;

        /* Form input */
        --input-border: #8b8a8b;
        --input-focus-h: 245;
        --input-focus-s: 100%;
        --input-focus-l: 42%;

        /* Button */
        --button-hover: rgb(189, 147, 249, 0.8);

        /* Box-Shadow (Card) */
        --pulse-primary-color:  rgba(255, 0, 0, 0.2);
        --pulse-secondary-color: rgba(102, 51, 153, 0.2);

        /* Error */
        --error: rgba(102, 51, 153, 0.2);

        /* Waves */
        --wave-primary-color: rgba(255, 0, 0, 0.2);

        /* Codeblocks */
        --code-background-color: #fdfaf6;
        --constant-color: rgb(189, 147, 249);
        --function-color: #B94185;
        --deleted-color: rgb(255, 85, 85);
        --changed-color: rgb(255, 255, 108, 0.8);
        --punctuation-color: #36313D;
        --string-selector-color: rgb(255, 121, 198);
        --keyword-color: #096FB3;
        --comment-color: #527713;
        --attribute-name-color: #ff8c00;
    }

    body[data-theme='dark'] {
         /* Colours */
         --primary: #06090F;
        --secondary: #c9d1d9;
        --code: #663399;
        --text: #ffffff;
        --text-gradient: linear-gradient(#fdfaf6, #58A6FF);
        --background-color: hsla(0, 0%, 100%, 0.2);

        /* Spacing */
        --space: 1rem;

        /* Form input */
        --input-border: #8b8a8b;
        --input-focus-h: 245;
        --input-focus-s: 100%;
        --input-focus-l: 42%;

        /* Button */
        --button-hover: rgb(189, 147, 249, 0.8);

        /* Box-Shadow (Card) */
        --pulse-primary-color:  rgba(88, 166, 255, 0.2);
        --pulse-secondary-color: rgba(102, 51, 153, 0.2);

        /* Error */
        --error: rgba(102, 51, 153, 0.2);

        /* Waves */
        --wave-primary-color: rgba(88, 166, 255, 0.5);

        /* Codeblocks */
        --code-background-color: #0D1117;
        --constant-color: rgb(189, 147, 249);
        --function-color: #B94185;
        --deleted-color: rgb(255, 85, 85);
        --changed-color: rgb(255, 255, 108, 0.8);
        --punctuation-color: #c9d1d9;
        --string-selector-color: rgb(255, 121, 198);
        --keyword-color: #2aa8fc;
        --comment-color: #7dbe0c;
        --attribute-name-color: #ff8c00;
    }

    html {
        min-height: 100%;
    }

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0rem;
        margin: 0rem;
    }

    body {
        margin: 0;
        font-size: 16px;
        display: inline-block;
        width: 100%;
        height: 100%;
        background-color: var(--primary);
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Source Sans Pro Black';
        font-weight: 900;
    }

    p, small, ol, blockquote, a, span, li {
        font-family: 'Open Sans Regular';
        font-weight: 400;
    }

    pre {
        /* Hide scrollbar for IE, Edge and Firefox */
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        font-family: 'Fira Mono Regular';
        font-weight: 400;
    }

    code {
        font-family: 'Fira Mono Regular';
        font-weight: 400;
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
        color: var(--text);
    }
    a,
    a * {
        cursor: pointer;
        text-decoration: none;
        color: var(--text);
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
