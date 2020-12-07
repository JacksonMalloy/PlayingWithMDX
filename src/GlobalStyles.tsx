import { createGlobalStyle } from 'styled-components'
import FiraMonoRegular from './fonts/fira-mono.regular.ttf'
import SourceSansProBlack from './fonts/source-sans-pro.black.ttf'
import SourceSansProLight from './fonts/source-sans-pro.light.ttf'
import OpenSansRegular from './fonts/OpenSans-Regular.ttf'

export const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Fira Mono Regular';
        src: url(${FiraMonoRegular}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Source Sans Pro Black';
        src: url(${SourceSansProBlack}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }

    @font-face {
        font-family: 'Open Sans Regular';
        src: url(${OpenSansRegular}) format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: auto;
    }

    :root {
        /* Colours */
        --primary: #ffffff;
        --secondary: #fdfaf6;
        --code: #663399;
        --text: #202020;

        /* Spacing */
        --space: 1rem;

        /* Form input */
        --input-border: #8b8a8b;
        --input-focus-h: 245;
        --input-focus-s: 100%;
        --input-focus-l: 42%;
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
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Source Sans Pro Black';
        font-weight: 900;
    }

    p, small, ol, blockquote, a, span {
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
